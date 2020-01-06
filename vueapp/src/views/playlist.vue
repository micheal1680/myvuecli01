<template>
  <div class="playlist-body">
    <div class="list-nav">
      <span>全部</span>
      <button @click="typelist">选择分类</button>
      <div class="typelist" style="display:none">
        <span>语种</span>
        <el-divider></el-divider>
        <span>风格</span>
        <el-divider></el-divider>
        <span>场景</span>
        <el-divider></el-divider>
        <span>情感</span>
        <el-divider></el-divider>
        <span>主题</span>
      </div>
    </div>
    <!-- 音乐列表里每一首歌的封面 -->
    <div class="all-song-cover">
      <div class="single-song-cover" v-for="(item,index) in allmusicCover" :key="index">
        <img :src="item.picture_url" alt />
        <audio class="audio" :src="item.music_url" controls="controls"></audio>
      </div>
    </div>

    <!-- 分页组件 -->
    <!-- <div class="block">
      <span class="demonstration">分页</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      allmusic: [],
      allmusicCover: [],
      // currentPage4: 1
    };
  },

  created() {
    var that = this;
    axios.get("/getAllmusic").then(res => {
      that.allmusicCover = res.data;
    });
  },
  mounted() {},
  methods: {
    typelist() {
      let typelist = document.querySelector(".typelist");
      if (typelist.style.display == "none") {
        typelist.style.display = "block";
      } else {
        typelist.style.display = "none";
      }
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
  }
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
.playlist-body {
  width: 980px;
  margin: auto;
  background-color: #fff;
  border: 1px solid #ccc;
}
.all-song-cover {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}
.single-song-cover {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 10px 25px;
}
.audio {
  width: 140px;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
}

/* layout分栏布局 */
.el-row {
  width: 100%;
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  width: 140px;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>