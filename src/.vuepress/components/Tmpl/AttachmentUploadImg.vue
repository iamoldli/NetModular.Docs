<template>
  <nm-tmpl v-bind="options" />
</template>
<script>
export default {
  data() {
    return {
      options: {
        attrs: [
          {
            name: 'value',
            desc: '选择的值',
            type: 'Arrary',
            opt: '-',
            def: '-'
          },
          {
            name: 'group',
            desc: '字典分组编码，必须',
            type: 'String',
            opt: '-',
            def: '-'
          },
          {
            name: 'code',
            desc: '字典编码，必须',
            type: 'String',
            opt: '-',
            def: '-'
          },
          {
            name: 'name',
            desc: '文件名称',
            type: 'String',
            opt: '-',
            def: '-'
          },
          {
            name: 'auth',
            desc: '是否需要授权访问，当开启该功能时，上传的文件会自动绑定当前账户，如果需要授权其他账户访问，需要自行在业务逻辑中做处理',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          },
          {
            name: 'before-upload',
            desc: '上传前函数',
            type: 'Function',
            opt: '-',
            def: '-'
          },
          {
            name: 'accept',
            desc: '数据项查询方法',
            type: 'String',
            opt: '-',
            def: '-'
          },
          {
            name: 'max-size',
            desc: '文件最大大小，如3kb、3mb、3gb等',
            type: 'String',
            opt: '-',
            def: '-'
          },
          {
            name: 'drag',
            desc: '是否可拖拽上传',
            type: 'Boolean',
            opt: '-',
            def: 'true'
          },
          {
            name: 'file-type',
            desc: '可接受文件类型,如txt、img等',
            type: 'Array',
            opt: '-',
            def: '-'
          },
          {
            name: 'disabled',
            desc: '禁用',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          }
        ],
        events: [
          {
            name: 'success',
            desc: '上传成功',
            params: '第一个参数是接口返回的数据，第二个是本地file对象'
          },
          {
            name: 'error',
            desc: '上传失败',
            params: '-'
          }
        ]
      }
    }
  }
}
</script>
