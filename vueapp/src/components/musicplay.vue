<template>
  <div class="bottom-control">
      <audio class="audio" src="../assets/music/01.mp3" ></audio>
      
      <!-- 播放控制 -->
      <div class="control-icon">
        <i class="iconfont icon-shangyishou"></i>
        <i class="iconfont icon-bofang"></i>
        <i class="iconfont icon-zantingtingzhi"></i>
        <i class="iconfont icon-xiayishou"></i>
      </div>
      
      <!-- 歌曲封面 -->      
      <img :src="theCover" alt="">
      <!-- 音乐播放进度条 -->
      <div class="progress-bar">
          <div class="bottom-line"></div>
          <div class="top-line"></div>
      </div>
      <!-- 时间进度显示 -->
      <div></div>

      <button type="button" @click="play">播放</button>
      <!-- 收藏，分享，音量，循环，查看评论 -->

  </div>
</template>

<script>
export default {
    data: function(){
        return {
            theCover: "",
            musicTime: ""
        }
    },
    methods: {
        play(){
            let audio = document.getElementsByClassName("audio")[0]
            audio.play();
            this.musicTime = audio.duration
            console.log(this.musicTime)
        }
    }
}
</script>

<style lang="scss">
.bottom-control{
    width: 100%;
    height: 44px;
    background-color: #242424;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    // justify-content: space-around;
    align-items: center;
}
.control-icon{
    // position: absolute;
    // top: 7px;
    // left: 40px;
    .iconfont{
    color: #fff;
    font-size: 26px;
    }
}

.progress-bar{
    // position: absolute;
    // top: 20px;
    // left: 230px;
}

.bottom-line{
    width: 500px;
    height: 8px;
    background-color: #ccc;
    border-radius: 4px;
}
.top-line{
    width: 500px;
    height: 8px;
    background-color: #C20C0C;
    border-radius: 4px;
}

</style>