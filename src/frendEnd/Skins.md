# 前端皮肤使用说明

NetModular 提供了皮肤机制，用户可以按照定好的规则来开发自己的皮肤，同时也可以通过 npm 来安装第三方的皮肤组件。

### 关键术语

为了更好的理解皮肤机制，大家需要搞清楚一些本框架中的术语

> 皮肤：布局相关的内容，如菜单栏的宽度、是否有顶部导航栏等

> 主题：色彩有关的内容，如顶部导航栏的背景色、菜单栏的背景色、激活菜单的背景色等等

> 字号：大小有关的内容，比如按钮大小、表单控件的大小、文字大小等等

### 使用方法

皮肤使用有两种方式：

> 如果直接使用前端框架库`NetModular.UI`，那么可以按照如下方式使用

```js
import NetModularUI from 'netmodular-ui'
import NetmodularSkinsClassics from 'netmodular-skins-classics'

// 使用皮肤
NetModularUI.registerSkin(NetmodularSkinsClassics)
```

> 如果使用了 Admin 模块，那么可以按照如下方式使用

```js
import WebHost from 'netmodular-module-admin'
import NetmodularSkinsClassics from 'netmodular-skins-classics'
import config from './config'

// 使用皮肤
WebHost.registerSkin(NetmodularSkinsClassics)
WebHost.start(config)
```

### 自定义皮肤

为了方便大家自定义皮肤，本框架提供了一个例子作为参考[NetModular.Skins.Classics](https://github.com/iamoldli/NetModular.Skins.Classics)，大家可直接在此代码上做修改然后发布~

至于自定义皮肤的教程，等我结婚了再写~😜

### 第三方皮肤

[NetModular.Skins.Pithy](https://github.com/h-gxi/NetModular.Skins.Pithy)
