<template>
  <div class="song">
    <div class="song-left">
      <!-- 头像 -->
      <img :src="songInfo.picture_url" alt />
      <div>
        <span>单曲:</span>
        <span>{{songInfo.title}}</span>
        <p>歌手：{{songInfo.name}}</p>
        <p>所属专辑：{{songCD}}</p>
      </div>
      <div class="song-play">
        <audio :src="songInfo.music_url" isPlay="false"></audio>
        <div @click="audioPlay" class="audioplay">播放</div>
        <!-- 收藏，分享，评论，下载 -->
      </div>
    </div>
    <div class="song-right">
      
      <!-- 歌词 -->
      <div class="lyric" v-for="(item,index) in lyricArr" :key="index">{{item}}</div>
    </div>

    <!-- 底部播放控制 -->
    <musicPlay class="playcontrol" :singleSong="songUrl" :isPlaying="playing"></musicPlay>
    <router-view></router-view>
  </div>
</template>

<script>
import musicPlay from "./musicPlay.vue";
import axios from "axios";
import Bus from "../bus/Bus.js";
export default {
  data: function() {
    return {
      songUrl: "",
      playing: false,
      isPlay: false,
      songCD: "默认",
      lyric: "默认",
      songInfo: {},
      lyricArr: []
    };
  },
  components: {
    musicPlay: musicPlay
  },
  created() {
    let songID = this.$route.query.id;
    axios
      .post("/getSinglesongInfo", {
        songid: songID
      })
      .then(res => {
        let songInfoArr = res.data;
        this.songInfo = songInfoArr[0];
        this.songUrl = this.songInfo.music_url
        this.lyric = this.songInfo.lyric;
        this.lyricArr = this.lyric.split(",")
      });      
  },
  methods: {
      audioPlay(){
          let audio = document.querySelector("audio")
          if(this.isPlay == false){
              audio.play()
              this.isPlay = true;
              this.playing = true;
          } else {
              audio.pause();
              this.isPlay = false;
              this.playing = true;
          }
      }
  }
};
</script>

<style scoped>
.song {
  margin: 30px 220px 74px 220px;
  display: flex;
  justify-content: space-between;
  
}
.song-left{
    width: 280px;
    height: 100%;
    background-color: #ccc;
    padding: 30px 0;
    line-height: 40px;
    
}
.song-right{
    width: 600px;
    background-color: #ccc;
    padding-top: 30px;
    box-sizing: border-box;
}
.audioplay{
    width: 80px;
    height: 30px;
    font-size: 16px;
    color: #fff;
    padding-bottom: 10px;
    margin-left: 100px;
    box-sizing: border-box;
    background-color: #3A74E0;
    border-radius: 4px;
    cursor: pointer;
    
}
.lyric{
    line-height: 30px;
    
}

</style>