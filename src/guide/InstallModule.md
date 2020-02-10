# 安装模块说明

前面介绍了如果快速创建一个模块，接下来，我们来看看如果安装一个模块。我们还是在之前的例子上进行介绍，比如 Blog 模块现在需要任务调用功能，那么就需要继承 Quartz 模块。

## 安装 Nuget 包

使用 VS 打开模块后端项目，在 WebHost 项目中，安装`NetModular.Module.Quartz.Web`包，截止本文档发布日期，最新版本为 1.5.1

```
Install-Package NetModular.Module.Quartz.Web -Version 1.5.1
```

## 配置数据库

打开 WebHost 项目中，config 目录下的`db.json`文件，添加 Quartz 模块对应的数据库配置

```json
{
  //是否开启日志
  "Logging": false,
  //数据库类型 0、SqlServer 1、MySql 2、SQLite
  "Dialect": 2,
  //数据库版本
  "Version": "",
  //数据库地址
  "Server": "../../data/SQLite",
  //端口号
  "Port": 0,
  //用户名
  "UserId": "",
  //密码
  "Password": "",
  //是否创建数据库和表
  "CreateDatabase": true,
  //是否创建数据库后初始化数据
  "InitData": true,
  //模块列表
  "Modules": [
    {
      //模块名称
      "Name": "Admin",
      //数据库名称
      "Database": "Nm_Admin"
    },
    {
      "Name": "Common",
      "Database": "Nm_Common"
    },
    {
      "Name": "Blog",
      "Database": "Nm_Blog"
    },
    {
      "Name": "Quartz",
      "Database": "Nm_Quartz"
    }
  ]
}
```

数据库配置信息根据您自己的情况进行设置，上面采用了 SQLite 数据库，并且开启了自动创建数据库和表功能，当应用启动时会自动创建模块的数据库和表，如果没有开启该功能，你需要自行创建~

## 启动后端

现在，您可以启动 WebHost 了，如果如下图所示，则表示启动成功：

<nm-img id="20200101144652" />

然后访问 [http://localhost:6228/swagger](http://localhost:6228/swagger) 查看后端接口列表

## 安装 NPM 包

下面介绍前端部分，前端集成与后端是类似的，只不过前端用的是 NPM 包管理。使用 vs 打开 UI 目录的 module-blog 目录，并安装对应的包

```
npm i -S netmodular-module-quartz
```

## 前端注册

前端包安装完成后，需要进行注册，打开 src 目录下的 main.js 文件，导入 Quartz 模块并注册

```js
import WebHost from 'netmodular-module-admin'
import Quartz from 'netmodular-module-quartz'
import config from './config'
import Blog from './index'

// 注入Quartz模块
WebHost.registerModule(Quartz)
// 注入模块
WebHost.registerModule(Blog)

// 启动
WebHost.start(config)
```

## 启动前端

剩下的就是确保包安装没有问题，就可以启动了~

```
npm run serve
```

模块已经成功集成，但是对应的菜单页面还没有配置，所以登录后需要进行以下操作才能看到效果

0、同步模块列表

1、同步权限列表

2、添加菜单

3、角色分配菜单和按钮权限

4、刷新页面

至此，您就成功安装了一个模块~
