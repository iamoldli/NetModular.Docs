import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'netmodular-ui/packages/styles/app.scss'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  //注册Element-UI
  Vue.use(ElementUI)

  //导入图标
  import('netmodular-ui/public/font/iconfont.js')
  //注册UI组件
  import('netmodular-ui/packages/components/index.js').then(m => {
    Vue.use(m.default)
  })
}
