# 00_Admin 权限管理模块说明

权限管理模块，是最核心的一个模块，采用了最简单的 RBAC 模式，所有项目都必须安装该模块(除非该项目不是管理类型系统，不包含权限管理功能)。该模块包含以下功能：

> 0、通用账户管理

> 1、人性化的菜单配置

> 2、细化到按钮的权限控制

> 3、实用的配置项功能

> 4、详细的审计日志记录

## 配置项

该模块目前包括两个配置项

```json
{
  //文件上传路径
  "UploadPath": "",
  //临时文件路径
  "TempPath": "",
  //权限管理模块配置
  "Admin": {
    //是否开启审计功能
    "Auditing": true,
    //是否开启权限验证
    "PermissionValidate": true
  }
}
```

> 0、Auditing：用于控制是否开启审计日志功能，该功能也可以在后台进行控制，只要有一个开启了，就会生效

> 1、PermissionValidate：用于控制是否开启权限验证，与审计相同，在后台也有对应的控制，也是有一个开启就会生效

## 什么是权限？

权限这个玩意，在不同的场景，不同的框架里面，对应的具体内容是不一样的，为了大家能更好的理解本框架在权限管理这块的设计，必须先把这个概念搞明白。

::: tip 什么是权限
在本框架中，权限就是接口，也就是 **Controller** 中的每一个 **Action**，当我们进行授权的时候，其实就是给角色或用户绑定哪些接口可以访问。
:::

明白了权限的定义，接下来就要考虑绑定的问题。想要在后台进行绑定，首先要把权限信息持久化，需要有一个权限表来保存权限信息，也就是 Admin 中的`Permission`表。

表有了，就要考虑怎么把数据放进去了，最笨的方法，就是手动一条条的录入，一个模块，少则几十，多则上百个接口，而一个项目往往好几个模块，如果手动录入维护的话。。。。。

所以，作为一名合格的程序猿，我们必须要想一个简单的办法来解决上面的问题，**提高生产力，促进中国特色社会主义的发展，维护世界和平，放飞自我**，是的，那就是通过 <label class="nm-text-danger nm-size-20">MVC</label> 中的一些功能以及<label class="nm-text-danger nm-size-20">反射</label> 来获取所有接口信息并更新到权限表~

当然，仅仅反射是不够的的，我们还要搭配以下两点约定：

> 0、Controller 与 Action 必须添加`Description`特性，该特性用于说明 Controller 与 Action，对应权限表的`Name`字段（其实 Swagger 中的中文说明也是从 Description 中获取的~）

> 1、所有 Action 必须指定请求方式(Swagger 也有该要求~)

以配置项管理为例，`ConfigController`代码如下：

```csharp
using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using NetModular.Lib.Auth.Web.Attributes;
using NetModular.Lib.Utils.Core.Extensions;
using NetModular.Lib.Utils.Core.Result;
using NetModular.Module.Admin.Application.ConfigService;
using NetModular.Module.Admin.Application.ConfigService.ViewModels;
using NetModular.Module.Admin.Domain.Config.Models;

namespace NetModular.Module.Admin.Web.Controllers
{
    [Description("配置项管理")]
    public class ConfigController : ModuleController
    {
        private readonly IConfigService _service;

        public ConfigController(IConfigService service)
        {
            _service = service;
        }

        [HttpGet]
        [Description("查询")]
        public async Task<IResultModel> Query([FromQuery]ConfigQueryModel model)
        {
            return await _service.Query(model);
        }

        [HttpPost]
        [Description("添加")]
        public Task<IResultModel> Add(ConfigAddModel model)
        {
            return _service.Add(model);
        }

        [HttpDelete]
        [Description("删除")]
        public Task<IResultModel> Delete([BindRequired]int id)
        {
            return _service.Delete(id);
        }

        [HttpGet]
        [Description("编辑")]
        public Task<IResultModel> Edit([BindRequired]int id)
        {
            return _service.Edit(id);
        }

        [HttpPost]
        [Description("修改")]
        public Task<IResultModel> Update(ConfigUpdateModel model)
        {
            return _service.Update(model);
        }
    }
}
```

上面的控制器中的接口，经过解析后对应如下权限信息：

<nm-img id="20200103144652" />

每个权限都有一个唯一的编码，这个编码的格式是 `Area_Controller_Action_HttpMethod`，四个单词分别表示：

**Area**：区域编码，也就是模块编码，如`Admin`

**Controller**：控制器名称，如`Config`，对应`ConfigController`
