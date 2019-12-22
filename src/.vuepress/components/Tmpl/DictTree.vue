<template>
  <nm-tmpl v-bind="options"> </nm-tmpl>
</template>
<script>
export default {
  data() {
    return {
      options: {
        attrs: [
          {
            name: 'v-model/value',
            desc: '选择字典值',
            type: 'Number/Arrary',
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
            name: 'multiple',
            desc: '多选',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          },
          {
            name: 'multiple-limit',
            desc: '多选时用户最多可以选择的项目数，为 0 则不限制',
            type: 'Number',
            opt: '-',
            def: '0'
          },
          {
            name: 'disabled',
            desc: '禁用',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          },
          {
            name: 'filterable',
            desc: '可搜索的',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          },
          {
            name: 'placeholder',
            desc: '占位符',
            type: 'String',
            opt: '-',
            def: '请选择...'
          },
          {
            name: 'height',
            desc: '弹出框高度',
            type: 'String',
            opt: '-',
            def: '400px'
          },
          {
            name: 'width',
            desc: '弹出框宽度',
            type: 'String',
            opt: '-',
            def: '260px'
          },
          {
            name: 'separator',
            desc: '多选时的分隔符',
            type: 'String',
            opt: '-',
            def: '/'
          },
          {
            name: 'delay',
            desc: '多选时过滤操作延迟时间，毫秒',
            type: 'Number',
            opt: '-',
            def: '600'
          }
        ],
        methods: [
          {
            name: 'refresh',
            desc: '刷新数据'
          },
          {
            name: 'reset',
            desc: '重置'
          }
        ],
        events: [
          {
            name: 'change',
            desc: '选中值发生变化时触发',
            params: '第一个参数当前选中的字典值，多选为数组，第二个参数为选择的对象'
          },
          {
            name: 'reset',
            desc: '重置事件',
            params: ''
          }
        ]
      }
    }
  }
}
</script>
