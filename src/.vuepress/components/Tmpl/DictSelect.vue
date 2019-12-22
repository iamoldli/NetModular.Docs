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
            desc: '选择的字典值',
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
            name: 'clearable',
            desc: '可清空',
            type: 'Boolean',
            opt: '-',
            def: 'true'
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
            name: 'show-refresh',
            desc: '显示刷新按钮',
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
            name: 'checked-first',
            desc: '是否默认选中第一个',
            type: 'Boolean',
            opt: '-',
            def: 'false'
          },
          {
            name: 'icon',
            desc: '头部的图标',
            type: 'String',
            opt: '-',
            def: '-'
          }
        ],
        methods: [
          {
            name: 'refresh',
            desc: '刷新数据'
          }
        ],
        events: [
          {
            name: 'change',
            desc: '选中值发生变化时触发',
            params: '目前的选中字典值'
          },
          {
            name: 'visible-change',
            desc: '下拉框出现/隐藏时触发',
            params: '出现则为 true，隐藏则为 false'
          },
          {
            name: 'remove-tag',
            desc: '多选模式下移除tag时触发',
            params: '移除的tag值'
          },
          {
            name: 'clear',
            desc: '可清空的单选模式下用户点击清空按钮时触发',
            params: ''
          },
          {
            name: 'blur',
            desc: '当 input 失去焦点时触发',
            params: 'event'
          },
          {
            name: 'focus',
            desc: '当 input 获得焦点时触发',
            params: 'event'
          }
        ]
      }
    }
  }
}
</script>
