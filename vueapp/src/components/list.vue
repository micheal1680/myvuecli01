<template>
  <el-container>
    <el-main>
      <el-table :data="tableData" style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column prop="title" label="歌曲标题" width="140"></el-table-column>
          <el-table-column prop="time" label="时长" width="120"></el-table-column>
          <el-table-column prop="name" label="歌手"></el-table-column>
          <el-table-column prop="cd" label="专辑"></el-table-column>
          <el-table-column prop="music_url" label="歌曲地址"></el-table-column>
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
</template>

<script>
import command from "../components/comand.vue"
export default {
   data() {
    return {
      tableData: [],
    };
  },
  components:{
    command:command
  },
  created(){
    this.axios.get("/yearlist").then(result=>{
      this.tableData=result.data
      console.log( this.tableData)
      console.log(this.tableData[0].title)
    })
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