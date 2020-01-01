<template>
  <div class="sponsor">
    <el-divider>请老刘同志(作者媳妇儿)喝杯咖啡~</el-divider>
    <el-card style="text-align:center;">
      <img style="width:300px;" :src="$withBase(`/images/airpay.jpg`)" />
      <img style="width:300px;" :src="$withBase(`/images/wechat.jpg`)" />
    </el-card>
    <el-divider>感谢以下老铁的打赏~</el-divider>
    <el-table :data="data" border show-summary size="small" style="width:100%;">
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="value" label="金额(元)" align="center" />
      <el-table-column prop="from" label="平台" align="center" />
      <el-table-column prop="date" label="日期" align="center" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: '*超',
          value: 168,
          date: '2019-11-12',
          from: '支付宝'
        },
        {
          name: '*懿辉',
          value: 168,
          date: '2019-10-30',
          from: '支付宝'
        },
        {
          name: 'D*d',
          value: 10,
          date: '2019-09-25',
          from: '支付宝'
        }
      ]
    }
  }
}
</script>
<style>
table {
  margin: 0;
}
</style>
