<template>
  <footer>
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
  </footer>
</template>

<script>
// 要渲染出数据库中的数据的方法：将数组tableDate得到的数据渲染到表格里面，首先表格要绑定数组tableData，然后写一个从数据库中获取数据的接口/favoritelist，将从数据库中获取到的数据（从数据库的表中获取到的数据就是以对象为元素的数组）赋予给tableData即可
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
    this.axios.get("/favoritelist").then(result=>{
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