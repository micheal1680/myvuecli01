<template>
  <footer>
    <el-container>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="title" label="歌曲标题" width="140"></el-table-column>
          <el-table-column prop="time" label="时长" width="120"></el-table-column>
          <el-table-column prop="name" label="歌手"></el-table-column>
          <el-table-column prop="cd" label="专辑"></el-table-column>
        </el-table>
      </el-main>
      <hr />
    <el-footer style="background-color:white;padding:0">
      <u>
        <span style="font-size:16px;padding-right:8px;">评论</span>
        <span style="font-size:12px">共0条评论</span>
      </u>
      <command></command>
      <router-view></router-view>
    </el-footer>
    </el-container>
  </footer>
</template>

<script>
import command from "../components/comand.vue"
export default {
  data() {
    const item = {
      title: "Hello",
      time: "04:48",
      name: "Adele",
      cd:"25"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  components:{
    command:command
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