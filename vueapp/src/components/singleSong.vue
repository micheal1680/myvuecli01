<template>
  <div class="song">
      {{this.$route.query.id}}
      <div class="song-left">
          <!-- 头像 -->
          <img src="" alt="">
      </div>
      <div class="song-right">
          <span>单曲</span>
          <span>{{songName}}</span>
          <p>歌手：{{singer}}</p>
          <p>所属专辑：{{songCD}}</p>
      </div>
      <div class="song-play">
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
import musicPlay from "./musicPlay.vue"
export default {
    data: function(){
        return {
            songName: "默认",
            singer: "默认",
            songCD: "默认",
            lyric: "默认"
        }
    },
    components: {
        "musicPlay": musicPlay
    }
}
</script>

<style>

</style>