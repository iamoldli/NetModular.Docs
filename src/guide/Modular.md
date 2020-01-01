# 我的模块化(开发平台)

本篇文档主要是介绍模块化理念相关的内容，不会涉及太多具体的技术原理细节，具体的会在其它文档中介绍~

## 概念说明

**模块：** 按照业务或者功能的不同拆分的块，比如：权限管理模块`Admin`、任务调度模块`Quartz`、人事档案模块`PersonnelFiles`等

**项目：** 项目可以理解为一个完整的产品，它是由至少一个模块组合而成的，比如：xxxOA 系统(包含权限管理模块`Admin`、任务调度模块`Quartz`、人事档案模块`PersonnelFiles`等模块)、xxx CMS 系统(包含权限管理模块`Admin`、任务调度模块`Quartz`、新闻管理模块`News`等模块组成)

## 模块化与微服务

很多人在初看本框架时，往往会与微服务作比较，我个人觉得，微服务其实也是一种模块化，但是本框架与微服务有个比较大的区别，微服务的各个服务都是独立部署的，服务之间通过 http 或者 rpc 等方式进行连接，而本框架则是强调集成，及将多个模块集成为一个项目打包部署，它是在开发阶段就已经进行集成了。

## 我想要的模块化

模块化这个概念很好理解，无非就是根据业务领域(_`可以理解为领域驱动中的领域`_)，将业务拆分成不同的模块，以此降低软件的复杂度，提高代码的复用等等。

对于我想要的模块化，应该说不仅仅是一个框架，更是一个完整的 **开发平台**，这个平台包括以下特点：

> 1、约定：每个模块都需遵守统一的约定和规则

> 2、独立：每个模块要尽量做到独立，模块之间尽量避免强依赖，尽量通过设计模式来解决依赖

> 3、灵活：任意个模块可灵活的集成打包部署

> 4、便捷：模块集成、打包、升级，要做到简单、方便、傻瓜式

> 5、全面：不仅仅后端模块化，前端也要模块化

> 6、维护：每个模块的代码需要单独的仓库维护，且要能够方便的管理

> 7、专注：开发人员只需关心自己所负责的模块

以上就是我想要的模块化开发平台所包含要求的简单描述，下面我们来详细说明。

### 1、约定

::: tip
所谓约定，是指模块需遵守统一的约定与规则。
:::

有一种软件设计范式，叫`约定优于配置（convention over configuration）`，也称作按约定编程，旨在减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。大部分人可能都没有听过这个，但是在平时开发的时候却经常会用到，我们来看几个例子

如 ASP.NET CORE MVC：

> 1、控制器都已`Controller`结尾，并且都放在`Controllers`目录下

> 2、视图放在对应的控制名称的目录下，且都放在`Views`目录下

> 3、配置信息都放在 appsettings.json 文件中

如 Spring Boot：

> 1、Maven 的目录结构。默认有 resources 文件夹,存放资源配置文件。src-main-resources,src-main-java。默认的编译生成的类都在 targe 文件夹下面。

> 2、spring boot 默认的配置文件必须是，也只能是 application.命名的 yml 文件或者 properties 文件，且唯一

> 3、application.yml 中默认属性。数据库连接信息必须是以 spring: datasource: 为前缀；多环境配置。该属性可以根据运行环境自动读取不同的配置文件；端口号、请求路径等

NetModular 中有很多地方也是采用了这种设计范式，最明显的应该便是模块的项目结构了。我们先来看一看一个模块的项目结构，以任务调度模块为例：

<nm-img id="20191223215500" />

上面便是一个标准的模块的项目结构(不包含前端)了，除非有特殊需求，否则所有模块应该都是这种结构，我们来简单说明一下：

> <span class="nm-size-20 nm-text-primary">build</span> : 该目录用于存放与项目编译打包有关的配置文件，比如 module.build.targets，用于生成模块描述信息文件

> <span class="nm-size-20 nm-text-primary">Application</span> : 应用服务层，用于存放应用服务接口、实现、CRUD 相关的模型等，所有业务逻辑都会放在这个库里面

> <span class="nm-size-20 nm-text-primary">Domain</span> : 领域层，用于存放实体、仓储接口、值类型、查询模型等数据，且按照实体来放到不同的目录下，实体全部以`Entity`结尾

> <span class="nm-size-20 nm-text-primary">Infrastructure</span> : 基础设施层，用于存放仓储的实现、模块配置类等

> <span class="nm-size-20 nm-text-primary">Quartz</span> : 任务调度层，用于存放任务调度有关的 Job 类

> <span class="nm-size-20 nm-text-primary">Web</span> : 应用层，存放控制器、模型验证、模块初始化有关的信息等

> <span class="nm-size-20 nm-text-primary">WebHost</span> : 应用启动器，只是用于集成模块和启动应用

以上是本框架对项目结构的一个约定，还有一些命名有关的约定，比如：

> 实体都要以`Entity`结尾

> 应用服务接口和实现都要以`Service`结尾

> 模型映射关系都要在`_MapperConfig.cs`类中设置，且`_MapperConfig.cs`必须根据所属服务放在对应服务目录

> 模型验证类都要放在 Web 的`Validators`目录中，并且必须以`Validator`结尾

> 配置文件全部放在 WebHost 中的 config 目录下

框架中包含了太多约定，这里就不在详细介绍了，具体的会在对应功能的详细文档中介绍~

其实这里就是想告诉大家，有了这些约定，大家就不需要再去纠结仓储应该放在哪里，控制器应该放在哪里，实体应该怎么命名等等这些无关紧要的问题，让大家专心的写业务~

### 2、独立

::: tip
所谓独立，是指模块之间需要尽量做到低耦合。
:::

当业务较复杂时，模块之间总会避免不了有相互依赖，这里的依赖，大部分都是一个模块用到了另一个模块的某个实体或者仓储，比如大部分实体都会有`创建人`属性，当查询实体列表时，往往会返回创建人的姓名，此时就要用到`Admin`模块中的`AccountEntity`实体，这种情况还好，因为框架本身支持跨模块的表连接查询，而且`Admin`本身就是核心模块，基本上所有项目都会安装它。

我们再来看另外一种依赖情况，比如有一个`人事档案模块`，该模块包含一个员工信息实体`EmployeeEntity`

```csharp
/// <summary>
/// 员工信息
/// </summary>
public class EmployeeEntity : EntityBase
{
    public string Name { get; set; }

    public string Sex { get; set; }

    public int Age { get; set; }
}
```

现在需要做一个`会议管理模块`，包含一张会议统计信息实体`MeetingStatisticsEntity`，该实体专门用于保存员工的会议统计信息

```csharp
/// <summary>
/// 会议统计信息
/// </summary>
public class MeetingStatisticsEntity : EntityBase
{
    /// <summary>
    /// 员工编号
    /// </summary>
    public Guid EmployeeId { get; set; }

    /// <summary>
    /// 待参加数量
    /// </summary>
    public int WaitCount { get; set; }

    /// <summary>
    /// 已参加数量
    /// </summary>
    public int AttendedCount { get; set; }
}
```

上面两个实体是一对一的关系，每个员工都有一条相关的统计信息数据，那么问题来了，员工对应的会议统计信息应该什么时候创建呢？

**1、创建员工信息时创建**

如果我们选择在创建员工信息时创建，这样就需要在`人事档案模块`中依赖`会议管理模块`，可明明是`会议管理`依赖了`人事档案模块`才对，这样就产生了强依赖，而且还是循环依赖。假如现在要做`项目管理模块`，也包含了类似的需求，那岂不是还要修改`人事档案模块`中创建员工部分的代码，不仅又多了依赖关系，万一改出了 bug，会影响所有使用`人事档案模块`的模块~

**2、使用观察者模式创建**

对于上面类似的需求，推荐采用观察者模式来解决，定义针对`EmployeeEntity`的观察者接口，本框架已集成了针对实体信息变更的观察者接口及实现，用法如下：

首先，在`EmployeeService.cs`中添加如下代码

```csharp
//注入观察者处理器接口
private readonly IEntityObserverHandler _observerHandler;

//添加
public async Task<IResultModel> Add(EmployeeAddModel model)
{
    if (await _repository.Exists(model.Name))
        return ResultModel.HasExists;

    var entity = _mapper.Map<EmployeeEntity>(model);

    var result = await _repository.AddAsync(entity);
    if (result)
    {
        //执行观察者方法，该方法内会执行所有实现了IEntityObserver<EmployeeEntity>接口的观察者
        await _observerHandler.Add<EmployeeEntity>(entity.Id);
    }

    return ResultModel.Result(result);
}
```

其次在需要用到员工信息的模块中，实现员工实体的观察者，比如

```csharp
public class EmployeeObserver : IEntityObserver<EmployeeEntity>
{
    public Task Add(dynamic id)
    {
        throw new NotImplementedException();
    }

    public Task Update(dynamic id)
    {
        throw new NotImplementedException();
    }

    public Task Delete(dynamic id)
    {
        throw new NotImplementedException();
    }
}
```

系统启动时，会自动加载所有的观察者并使用单例模式注入到容器中，所以，在观察者类中，您可以注入任何您想要的服务。当有新的模块也有类似需求时，只要定义自己的`EmployeeObserver`就行了~

因为目前我只遇到了这一种情况，所以也没有其他依赖的例子可以讲了，不过重点是理解其中的思想，善用设计模式来解决平时遇到的一些问题

::: warning
上面的例子也是有约定的，因为一个模块可能会定义多个实体的观察者，所以为了统一规范，所有实体的观察者实现，放到与之有关的服务中，比如`MeetingStatisticsEntity`对应的`EmployeeObserver`，需要放在`MeetingStatisticsService`目录中
:::

### 3、灵活

::: tip
灵活，是指模块可以灵活的集成
:::

### 4、便捷

### 5、全面

### 6、维护

### 7、专注
