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

    <router-link to></router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      allmusic: [],
      allmusicCover: []
    };
  },

  created() {
    var that = this;
    axios.get("/getAllmusic").then(res => {
      that.allmusicCover = res.data;      
      console.log("---allmusicCover---");
      console.log(that.allmusicCover[0].picture_url)
      
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
    }
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
  display:flex;
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