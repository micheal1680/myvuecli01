<template>
  <div class="song">
      {{this.$route.query.id}}

      <div class="song-left">
          <!-- 头像 -->
          <img src="" alt="">
      </div>
      <div class="song-right">
          <span>单曲</span>
          <span>{{songInfo.title}}</span>
          <p>歌手：{{songInfo.name}}</p>
          <p>所属专辑：{{songCD}}</p>
      </div>
      <div class="song-play">
          <audio src=""></audio>
          <div>播放</div>
          <!-- 收藏，分享，评论，下载 -->
      </div>
      <!-- 歌词 -->
      <div class="lyric">{{lyric}}</div>
      <!-- 底部播放控制 -->
      <musicPlay></musicPlay>
      <router-view></router-view>
  </div>
</template>

<script>
import musicPlay from "./musicPlay.vue";
import axios from "axios";
import Bus from "../bus/Bus.js";
export default {
    data: function(){
        return {
            songCD: "默认",
            lyric: "默认",
            songInfo: {}
        }
    },
    components: {
        "musicPlay": musicPlay
    },
    created(){
        console.log("---进入created---")
        
        // Bus.$on("singleSongInfo",(val)=>{
        //     this.songInfo = val;
        //     console.log("---created--songInfo---" + this.songInfo.name)
        //     console.log("---created--songInfo---" + this.songInfo.title)
            
        // })
        console.log(this.$route.query.id)
        let songID = this.$route.query.id
        axios.post("/getSinglesongInfo",{
            songid: songID
        }).then(res=>{
            let songInfoArr = res.data;
            this.songInfo = songInfoArr[0]
            console.log(songInfoArr)
            console.log(songInfoArr[0])
            console.log(this.songInfo)
        })
    }
}
</script>

<style>

</style>