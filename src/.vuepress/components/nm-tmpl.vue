<template>
  <div class="nm-tmpl">
    <div>
      <slot />
    </div>
    <section v-if="attrs" class="nm-tmpl-box">
      <h1 class="nm-tmpl-box-title">属性(Attributes)</h1>
      <el-table :data="attrs" border style="width: 100%">
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="opt" label="可选值" />
        <el-table-column label="默认值">
          <template slot-scope="{ row }">{{ row.def }}</template>
        </el-table-column>
      </el-table>
    </section>
    <div>
      <slot name="after-attrs" />
    </div>
    <section v-if="slots" class="nm-tmpl-box">
      <h1 class="nm-tmpl-box-title">插槽(Slot)</h1>
      <el-table :data="slots" border style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </section>
    <div>
      <slot name="after-slots" />
    </div>
    <section v-if="methods" class="nm-tmpl-box">
      <h1 class="nm-tmpl-box-title">方法(Method)</h1>
      <el-table :data="methods" border style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
    </section>
    <div>
      <slot name="after-methods" />
    </div>
    <section v-if="events" class="nm-tmpl-box">
      <h1 class="nm-tmpl-box-title">事件(Event)</h1>
      <el-table :data="events" border style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
    </section>
    <div>
      <slot name="after-events" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    attrs: {
      type: Array
    },
    slots: {
      type: Array
    },
    methods: {
      type: Array
    },
    events: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.nm-tmpl {
  &-box {
    margin-bottom: 30px;
    &-title {
      margin: 10px 0;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .el-alert__title {
    font-size: 17px;
  }

  .el-alert__description {
    margin-top: 10px;
    font-size: 15px;
    p {
      margin-bottom: 10px;
    }
  }

  table {
    margin: 0;
  }
}
</style>
