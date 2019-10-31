<template>
  <div class="sponsor">
    <el-divider>请老刘同志(作者媳妇儿)喝杯咖啡~</el-divider>
    <el-card style="text-align:center;">
      <img style="width:300px;" :src="$withBase(`/images/airpay.jpg`)" />
      <img style="width:300px;" :src="$withBase(`/images/wechat.jpg`)" />
    </el-card>
    <el-divider>打赏记录，感谢~</el-divider>
    <el-table :data="data" border size="small" style="width:100%;">
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="value" label="金额(元)" align="center">
        <template v-slot="{row}">￥{{row.value}}</template>
      </el-table-column>
      <el-table-column prop="date" label="日期" align="center" />
    </el-table>
  </div>
</template>
<script>
import data from './Sponsor.data';
export default {
  data() {
    return {
      data
    }
  }
}
</script>
<style>
table {
  margin: 0;
}
</style>