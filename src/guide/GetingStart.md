# 快速上手

本篇文档让你能够快速的启动`NetModular`项目。

## 配置

进入`src/Admin/WebHost/config`目录，如下：

<nm-img id="20190821142628"/>

::: tip

### 文件说明

> cache：存放与缓存有关的配置信息

> db：存放与数据库有关的配置信息

> excel：存放与 Excel 操作有关的配置信息

> host：存放站点启动有关的配置信息

> jwt：与 JWT 认证有关的配置信息

> logging：与日志有关的配置信息

:::

::: warning 警告

如上图所示，配置信息按照功能放在的不同的文件中，而每一种配置文件都有两种类型，其中带`.Development.json`表示开发环境配置文件，顾名思义，当你是开发环境时，配置信息以带`.Development.json`的为先，否则以不带`.Development.json`的为先。

:::

## 配置数据库

根据自己的数据库配置信息，编辑`db.json`文件，配置信息说明：

已 SQLite 为例，也是代码中的默认配置

```json
{
  //是否开启日志
  "Logging": false,
  //数据库类型 0、SqlServer 1、MySql 2、SQLite
  "Dialect": 2,
  //数据库版本
  "Version": "",
  //数据库地址
  "Server": ".",
  //端口号
  "Port": 0,
  //用户名
  "UserId": "",
  //密码
  "Password": "",
  //是否创建数据库和表
  "CreateDatabase": true,
  //是否创建数据库后执行初始化脚本
  "InitData": true,
  //PostgreSQL数据库名称，仅PostgreSQL数据库有效
  "NpgsqlDatabaseName": null,
  //模块列表
  "Modules": [
    {
      //模块名称
      "Name": "Admin",
      //表前缀
      "Prefix": "",
      //数据库名称
      "Database": "Nm_Admin",
      //自定义连接信息
      "ConnectionString": "",
      //自定义版本号
      "Version": ""
    }
  ]
}
```

::: warning 警告

本框架支持多种数据库，代码中默认采用 SQLite 数据库，所以您获取最新的代码后是可以直接就能跑起来的。如果需要其它数据库，请按照上面的说明修改配置信息。

同时目前本框架已支持自动创建数据库以及初始化数据功能(目前仅支持初始化 Admin 模块的数据)。

:::

## 其它配置信息

其它功能模块的配置信息使用默认值就行，如果想修改可以自己查看文件中的说明。

## 启动服务端

这里就使用命令来启动，进入`src/Admin/WebHost`目录，打开 CMD 或 PowerShell 执行以下命令

```
dotnet watch run
```

如果结果如下图所示则表示启动成功

<nm-img id="20190821144717"/>

#### 可访问 <a href="http://localhost:6220/swagger/index.html" title="为什么用 6220 作为默认端口号，因为我媳妇儿生日是 6 月 22~">http://localhost:6220/swagger/index.html</a> 浏览接口文档。

<p></p>
<nm-img id="20190821145531"/>

## 启动前端

::: warning 警告
前端运行环境依赖`Node.js 10+`，如果无法启动请检查自己的版本是否匹配`node -v`。  
前端运行环境依赖`Node.js 10+`，如果无法启动请检查自己的版本是否匹配`node -v`。  
前端运行环境依赖`Node.js 10+`，如果无法启动请检查自己的版本是否匹配`node -v`。
:::

进入`src/Admin/UI/module-admin`目录，执行以下命令：

```
npm install
npm update
npm run serve
```

如下图所示表示成功

<nm-img id="20190821145614"/>

访问 [http://localhost:5220/app/](http://localhost:5220/app/) 浏览，默认账户密码为 admin/admin

::: warning 警告
单独启动前端，路径的 app 后面一定要带上/
:::

## 发布

进入`src/Admin/UI/module-admin`目录，执行以下命令打包前端代码：

```
npm run build
```

成功后打包的文件会保存到`src/Admin/WebHost/wwwroot/app`目录下面

然后用 vs 打开项目，发布 WebHost 即可
