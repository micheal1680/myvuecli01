<template>
  <div class="bottom-control">
    <audio class="bottom-audio" src="../assets/music/01.mp3" :isPlay="false"></audio>

    <!-- 播放控制 -->
    <div class="control-icon">
      <i class="iconfont icon-shangyishou"></i>
      <i class="iconfont icon-bofang" @click="play"></i>
      <i class="iconfont icon-zantingtingzhi" @click="play"></i>
      <i class="iconfont icon-xiayishou"></i>
    </div>

    <!-- 歌曲封面 -->
    <img :src="theCover" alt />
    <!-- 音乐播放进度条 -->
    <div class="progress-bar">
      <div class="bottom-line">
        <div class="top-line" :style="{width:audioWidth+'px'}"></div>
      </div>
    </div>
    <!-- 时间进度显示 -->
    <div></div>
    <!-- 当前歌曲播放列表 -->
    <div class="bottom-playlist-icon">
      <i class="iconfont icon-yinleliebiao" @click="listDisplay"></i>
    </div>
    <div class="bottom-playlist-content" v-if="playList"></div>
    <!-- 收藏，分享，音量，循环 -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      theCover: "",
      musicTime: "",
      isPlay: false,
      audioWidth: 0,
      timer: "",
      playList: false
    };
  },
  props: [],
  methods: {
    play() {
      let audio = document.getElementsByClassName("bottom-audio")[0];
      let play = document.getElementsByClassName("icon-bofang")[0];
      let pause = document.getElementsByClassName("icon-zantingtingzhi")[0];
      let topLine = document.getElementsByClassName("top-line")[0];
      if (this.isPlay == false) {
        audio.play();
        this.isPlay = true;
        play.style.display = "none";
        pause.style.display = "block";

        let musicLength = audio.duration;
        console.log("音乐长度" + musicLength);
        if (this.play) {
          console.log("定时器外部" + this.audioWidth);
          this.timer = setInterval(() => {
            this.audioWidth = (this.audioWidth / 50 + 1 / musicLength) * 50;
            console.log("定时器内部" + this.audioWidth);
            if (this.audioWidth >= 500) {
              clearInterval(this.timer);
              this.audioWidth = 0;
            }
          }, 100);
        }
      } else if (this.isPlay == true) {
        audio.pause();
        this.isPlay = false;
        play.style.display = "block";
        pause.style.display = "none";
        clearInterval(this.timer);
      }
    },
    listDisplay() {
      if (this.playList == false) {
        this.playList = true;
      } else {
        this.playList = false;
      }
    }
  }
};
</script>

<style lang="scss">
.bottom-control {
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
.control-icon {
  width: 100px;
  height: 100%;
  margin: 0 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconfont {
    color: #fff;
    font-size: 26px;
  }
}
.icon-bofang,
.icon-zantingtingzhi {
  position: absolute;
  top: 7px;
  left: 40px;
}

.icon-zantingtingzhi {
  display: none;
}
.progress-bar {
  margin: 0 20px;
}

.bottom-line {
  width: 500px;
  height: 8px;
  background-color: #ccc;
  border-radius: 4px;
  position: relative;
}
.top-line {
  width: 0;
  height: 8px;
  background-color: #c20c0c;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
}

.icon-xiayishou {
  margin-bottom: 6px;
  margin-left: 35px;
}

.bottom-playlist-icon {
  .icon-yinleliebiao {
    color: #fff;
    font-size: 24px;
  }
}

.bottom-playlist-content {
  width: 100%;
  height: 250px;
  background-color: #242424;
  position: absolute;
  left: 0;
  bottom: 44px;
  border-bottom: 2px solid #5c5b5b;
}
</style>