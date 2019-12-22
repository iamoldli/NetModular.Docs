# 通用模块说明

通用模块是一个非常基础的模块，它里面的东西应当可以被所有模块所使用。

## 配置项说明

```json
//通用模块
"Common": {
  //附件上传路径
  "AttachmentPath": "",
  //字典缓存是否启用
  "DictCacheEnabled": true
}
```

## 数据字典

数据字典功能涉及三张表`字典分组(DictGroup)`、`字典(Dict)`、`字典数据项(DictItem)`，字典必须绑定分组，单个分组下的字典编码不能重复，字典数据项的名称或者值不允许重复

字典表包含两个全局组件`nm-dict-select`、`nm-dict-tree`，从组件名称就可以看出来，一个是下拉框，一个树。两个组件的 v-model 都是用的数据项的 value，如果需要其它属性，请在组件的`change`事件中自行处理，该事件会传递两个参数，第一个是选择的 value、第二个是选择的数据项对象。

两个组件都需要两个必须的属性，`group`分组编码和`code`字典编码

## 字典下拉框组件

#### 组件名称：`nm-dict-select`

该组件与其他下拉框组件用法一样，可以多选、过滤等

<Tmpl-DictSelect/>

示例：

```html
<el-form-item label="行业分类：" prop="code">
  <nm-dict-select v-model="list.model.code" group="common" code="ins" clearable />
</el-form-item>
```

<nm-img id="20191123210428"/>

## 字典树组件

#### 组件名称：`nm-dict-tree`

<Tmpl-DictTree/>

示例：

```html
<el-form-item label="行业分类：" prop="type">
  <nm-dict-tree v-model="list.model.type" group="common" code="ins" filterable multiple :multiple-limit="2" @change="onchange" />
</el-form-item>
```

<nm-img id="20191123210722"/>

## 附件表

所谓附件及文件上传，由于前后端分离的特殊性，文件上传、图片预览等功能实现较麻烦，附件对此进行了封装，以简化这些操作。

同时包含了文件权限功能，及只有被授权的用户才能访问附件，依赖于`AttachmentOwnerEntity`实体。

目前附件包含三个全局组件，`图片预览(nm-attachment-img)`、`图片上传(nm-attachment-upload-img)`、`单文件上传(nm-attachment-upload-single)`

::: warning
因为本框架采用模块化设计，为了更好的区分上传文件的路径，附件上传时必须指定`module`和`group`两个属性
:::

## 图片预览组件

#### 组件名称：`nm-attachment-img`

因为在前端后分离模式下，原生的 img 标签没有办法在请求头中添加 token，所以如果上传的图片需要登录才能访问，必须自行做处理，而该组件就是解决这个问题的~

`nm-attachment-img`组件用法很简单，只需要图片对应附件 ID 即可，剩下的跟原生 img 一样~

```html
<nm-attachment-img :id="id" />>
```

## 图片上传组件

#### 组件名称：`nm-attachment-upload-img`

一般情况下，图片上传都需要预览功能，就像上面所说的，如果上传的图片需要登录才能访问，必须自行做处理，而该组件就是解决这个问题的~

该组件包含以下属性，你可根据需要自行设置

<Tmpl-AttachmentUploadImg/>

示例：

```html
<el-form-item label="图片：">
  <nm-attachment-upload-img module="common" group="att" v-model="img" />
</el-form-item>
```

<nm-img id="20191124171338" />

## 单文件上传组件

#### 组件名称：`nm-attachment-upload-single`

该组件与图片上传属性类似~

<Tmpl-AttachmentUploadSingle/>

示例：

```html
<el-form-item label="文件：" prop="file">
  <nm-attachment-upload-single v-model="form.model.file" module="common" group="aaa" clearable />
</el-form-item>
```

<nm-img id="20191124172649" />

## 附件下载

为了方便大家下载附件，在该模块的前端`index.js`文件中，已经将对应的方法扩展为了 Vue 的实例方法

```js
import './api'
import store from './store'
import routes from './routes'
import components from './components'
import module from './module'

export default {
  module,
  routes,
  store,
  components,
  callback({ Vue }) {
    // 附件上传地址
    Vue.prototype.$attachment = {
      // 上传地址
      uploadUrl: $api.common.attachment.getUploadUrl(),
      // 下载方法
      download(id) {
        $api.common.attachment.download(id)
      }
    }
  }
}
```

上面的 callback 方法会在系统初始化的时候被调用，所以，您如果需要下载附件，只需使用如下方法即可：

```js
this.$attachment.download(id) //id为附件的id
```
