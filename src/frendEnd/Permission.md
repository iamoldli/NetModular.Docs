# 权限相关

## 1、如何判断是否拥有某个按钮权限

在框架中的`account`状态里，提供了可以判断用户是否拥有某个按钮权限的 Mutation `haButton`，该方法接收一个`button`对象。

举个例子，在用户列表里面，有一列是控制用户是否启用状态的 switch 开关，您想对这个开关进行权限验证，那么，您可以这样：

```html
<template>
  <nm-container>
    <nm-list ref="list" v-bind="list">
      <!--启用状态-->
      <template v-slot:col-enabled="{row}">
        <el-switch
          :value="row.enabled"
          @change="changeStatus(row)"
          :disabled="disabledChangeStatus"
        />
      </template>
    </nm-list>
  </nm-container>
</template>
```

```js
import { mapActions } from 'vuex'
import page from './page'

// 接口
const api = $api.admin.account

export default {
  name: page.name,
  data() {
    return {
      curr: { id: '' },
      list: {
        title: page.title,
        cols,
        action: api.query,
        model: {
          enabled: '',
          name: '',
          channelCode: ''
        }
      },
      buttons: page.buttons,
      disabledChangeStatus: false
    }
  },
  methods: {
    ...mapActions('app/account', ['hasButton'])
    async changeStatus(row) {
      await this._confirm(`您确定要${row.enabled ? '禁用' : '启用'}《${row.name}》吗？`, '提示')
      api.changeStatus({ id: row.id, enabled: !row.enabled }).then(() => {
        row.enabled = !row.enabled
      })
    }
  },
  created() {
    //设置修改状态按钮权限
    this.hasButton(this.buttons.changeStatus).then(r => {
      this.disabledChangeStatus = !r
    })
  }
}
```
