<template>
  <div class="nm-img-box">
    <img :src="$withBase(`/images/${id}.png`)" @click="visible = true" title="点击查看大图" />
    <el-dialog title="图片预览" width="90%" :visible.sync="visible">
      <img class="nm-img-big" :src="$withBase(`/images/${id}.png`)" />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    id: String
  }
}
</script>
<style lang="scss">
.nm-img-box {
  .el-dialog__body {
    text-align: center;
  }
  > img {
    cursor: pointer;
  }
}
</style>
