# 快速上手

本篇文档让你能够快速的启动`NetModular`项目。

示例源码仓库：
- github: https://github.com/iamoldli/NetModular.Demo
- gitee: https://gitee.com/laoli/NetModular.Demo

## 配置

配置信息都保存在`appsettings.json`文件中，根据功能来区分，如下：

```json
{
  //主机配置
  "Host": {
    //地址
    "Urls": "http://*:6220",
    //开启Swagger
    "Swagger": false,
    //代理
    "Proxy": false,
    //指定跨域访问时预检请求的有效期，单位秒，默认30分钟
    "PreflightMaxAge": 0
  },
  //日志配置
  "Serilog": {
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Microsoft": "Error",
        "System": "Error"
      }
    },
    "WriteTo": [
      //输出到文件
      {
        "Name": "File",
        "Args": {
          //文件路径
          "path": "log/log.log",
          //文件滚动方式
          "rollingInterval": "Day",
          //消息输出格式
          "outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}",
          //文件数量
          "retainedFileCountLimit": 60,
          //使用缓冲，提高写入效率
          "buffered": false
        }
      }
    ]
  },
  //数据库配置
  "Db": {
    //是否开启日志
    "Logging": false,
    //数据库类型 0、SqlServer 1、MySql 2、SQLite
    "Dialect": 2,
    //数据库版本
    "Version": "",
    //数据库地址
    "Server": "",
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
  },
  //缓存配置
  "Cache": {
    //缓存提供器：0、MemoryCache 1、Redis
    "Provider": 0,
    //Redis配置
    "Redis": {
      "Prefix": "",
      "ConnectionString": "127.0.0.1"
    }
  },
  //Excel配置
  "Excel": {
    //Excel类库：0、EPPlus 1、NPOI 2、OpenXml (暂时只实现了EPPlus)
    "Provider": 0,
    //Excel操作时产生的临时文件存储根路径
    "TempPath": ""
  },
  //OSS配置
  "OSS": {
    //存储提供器：0、本地存储 1、七牛
    "Provider": 0,
    //七牛存储配置
    "Qiniu": {
      //Key
      "AccessKey": "",
      //密钥
      "SecretKey": "",
      //域名(结尾不包含/)
      "Domain": "",
      //空间名称
      "Bucket": "",
      //存储区域：0、华 东 1、华 北 2、华 南 3、北 美 4、东南亚
      "Zone": 0
    }
  }
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
