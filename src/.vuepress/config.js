module.exports = {
  base: '',
  port: 7220,
  dest: 'dist',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'images'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'NetModular',
      description: '为中小型企业而生的基于.Net Core平台的模块化快速开发解决方案'
    }
  },
  themeConfig: {
    lastUpdated: '最后更新时间:',
    locales: {
      '/': {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '更新日志', link: '/update/2020-03-08' },
          { text: '打赏', link: '/Sponsor' },
          {
            text: '选择语言',
            items: [{ text: '简体中文', link: '/' }]
          },
          { text: 'GitHub', link: 'https://github.com/iamoldli/NetModular' },
          { text: 'Gitee', link: 'https://gitee.com/laoli/NetModular' }
        ],
        sidebar: [
          ['https://vuepress.vuejs.org/zh/', '本文档使用VuePress开发'],
          {
            title: '指南',
            collapsable: false,
            children: [
              ['/guide/', '介绍'],
              ['/guide/Modular', '我的模块化'],
              ['/guide/GetingStart', '快速上手'],
              ['/guide/CreateModule', '创建一个模块'],
              ['/guide/InstallModule', '安装一个模块']
            ]
          },
          {
            title: '基础',
            collapsable: false,
            children: [
              ['/fundamentals/DI', '依赖注入'],
              ['/fundamentals/Options', '配置项']
            ]
          },
          {
            title: '框架',
            collapsable: false,
            children: [
              ['/framework/00_Host', '主机(00_Host)'],
              ['/framework/01_Utils', '通用库(01_Utils)'],
              ['/framework/02_Data', '数据访问(02_Data)'],
              ['/framework/03_Logging', '日志(03_Logging)'],
              ['/framework/04_Mapper', '对象映射(04_Mapper)'],
              ['/framework/05_Swagger', '接口文档(05_Swagger)'],
              ['/framework/06_Cache', '缓存(06_Cache)'],
              ['/framework/07_Validation', '模型验证(07_Validation)'],
              ['/framework/08_Auth', '身份认证(08_Auth)'],
              ['/framework/09_Module', '模块抽象(09_Module)'],
              ['/framework/10_MQ', '消息队列(10_MQ)'],
              ['/framework/11_Quartz', '任务调度(11_Quartz)'],
              ['/framework/12_Excel', 'Excel(12_Excel)'],
              ['/framework/13_Options', '配置管理(13_Options)']
            ]
          },
          {
            title: '前端',
            collapsable: false,
            children: [
              ['/frendEnd/DevEnvironment', '开发环境'],
              ['/frendEnd/Framework', '核心框架'],
              ['https://docs.17mkh.com/ui', '组件介绍'],
              ['/frendEnd/CssHelper', 'Css帮助类'],
              ['/frendEnd/Skins', '皮肤机制'],
              ['/frendEnd/Login', '自定义登录页'],
              ['/frendEnd/Q&A', 'Q&A']
            ]
          },
          {
            title: '模块',
            collapsable: false,
            children: [
              ['/modules/00_Admin', '00_权限管理 (Admin)'],
              ['/modules/01_Common', '01_通用模块 (Common)'],
              ['/modules/02_CodeGenerator', '02_CodeGenerator(代码生成器)'],
              ['/modules/03_Quartz', '03_Quartz(任务调度)'],
              ['/modules/04_PersonnelFiles', '04_PersonnelFiles(人事档案)'],
              ['/modules/05_Crawler', '05_Crawler(爬虫模块)'],
              ['/modules/06_Cas', '06_Cas(统一认证)'],
              ['/modules/07_IM', '07_IM(即时通讯)'],
              ['/modules/08_Forum', '08_Forum(论坛模块)'],
              ['/modules/09_Blog', '09_Blog(博客模块)'],
              ['/modules/10_Contract', '10_Contract(合同管理)']
            ]
          },
          {
            title: '规范',
            collapsable: false,
            children: [
              ['/guidelines/CodeGuidelines', '编码规范'],
              ['/guidelines/DevGuidelines', '开发规范']
            ]
          },
          {
            title: '平台搭建',
            collapsable: false,
            children: [
              ['/platform/Git', '搭建Git服务器'],
              ['/platform/NuGet', '搭建Nuget服务器'],
              ['/platform/Npm', '搭建Npm服务器']
            ]
          },
          {
            title: '扩展技能',
            collapsable: false,
            children: [['/extend/MSBuild', 'MSBuild']]
          },
          {
            title: '更新日志',
            collapsable: false,
            children: [
              ['/update/2020-02-10', '2020-02-10'],
              ['/update/2020-01-14', '2020-01-14'],
              ['/update/2020-01-08', '2020-01-08'],
              ['/update/2019-12-24', '2019-12-24'],
              ['/update/2019-12-08', '2019-12-08'],
              ['/update/2019-11-24', '2019-11-24'],
              ['/update/2019-11-17', '2019-11-17'],
              ['/update/2019-11-13', '2019-11-13'],
              ['/update/2019-11-08', '2019-11-08'],
              ['/update/2019-10-31', '2019-10-31'],
              ['/update/2019-10-28', '2019-10-28'],
              ['/update/2019-10-12', '2019-10-12'],
              ['/update/2019-09-29', '2019-09-29'],
              ['/update/2019-09-12', '2019-09-12'],
              ['/update/2019-09-04', '2019-09-04'],
              ['/update/2019-08-30', '2019-08-30']
            ]
          }
        ]
      }
    }
  }
}
