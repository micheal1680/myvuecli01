<template>
  <el-container>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </el-main>
    <hr />
    <el-footer style="background-color:white;padding:0">
      <u>
        <span style="font-size:16px;padding-right:8px;">评论</span>
        <span style="font-size:12px">共0条评论</span>
      </u>
      <div class="message" style="width:100%;border-top:1px solid red;padding:0">
        <input type="text" v-model="mymesg"/>
        <button type="button"  @click="submitForm('mymesg')">提交</button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "张雨",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>