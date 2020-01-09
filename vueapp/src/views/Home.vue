<template>
  <div>
    <div class="lunbo">
      <!-- 轮播图 -->
      <div class="lunbotu">
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="(item,index) in lunbotuArr" :key="index">
            <img :src="item.src" alt />
          </el-carousel-item>
          <!-- 下载客户端 -->
          <div class="download">
            <img src="../assets/Home-images/download/01.png" alt />
            <img src="../assets/Home-images/download/02.png" alt />
            <el-row>
              <el-button type="primary" @click="downloadClient">
                <i class="iconfont icon-xiazai"></i>
                下载客户端
              </el-button>
            </el-row>
            <p class="clientName">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </el-carousel>
      </div>

      <div class="musicList">
        <!-- 热门推荐列表 musicList左边部分-->
        <div class="hot-list">
          <el-container>
            <el-aside width="730px">
              <!-- 热门推荐导航栏 -->
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo hot-nav"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item class="hotTag" index="1">热门推荐</el-menu-item>
                <el-menu-item class="typeTag" index="2">华语</el-menu-item>
                <el-menu-item index="3">流行</el-menu-item>
                <el-menu-item index="4">摇滚</el-menu-item>
                <el-menu-item index="5">民谣</el-menu-item>
                <el-menu-item index="6">电子</el-menu-item>
                <el-menu-item index="7">更多</el-menu-item>
              </el-menu>

              <!-- 热门推荐列表 -->
              <div class="hot-song-cover">
                <div
                  class="single-song-cover"
                  v-for="(item,index) in hotMusicCover"
                  :key="index"
                  :isPlay="false"
                >
                  <img class="cover" :src="item.picture_url" @click="toSingleSong(index,$event)" alt />
                  <i class="iconfont icon-bofang" @click="playMusic(index,$event)"></i>
                  <!-- <audio class="audio" :src="item.music_url" controls="controls" :isPlay="false"></audio> -->
                  <audio class="audio hot-audio" :src="item.music_url" :current="0"></audio>
                </div>
              </div>

              <!-- 新碟上架导航栏 -->
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo hot-nav"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item class="hotTag" index="1">新碟上架</el-menu-item>
              </el-menu>

              <!-- 新碟上架列表 -->
              <div class="hot-song-cover">
                <div class="single-song-cover" v-for="(item,index) in newMusicCover" :key="index">
                  <i class="iconfont icon-bofang" @click="playMusic(index,$event)"></i>
                  <img :src="item.picture_url" @click="toSingleSong(index,$event)" alt />
                  <audio class="audio" :src="item.music_url"></audio>
                </div>
              </div>

              <!-- 榜单导航栏 -->
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo hot-nav"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item class="hotTag" index="1">榜单</el-menu-item>
              </el-menu>

              <!-- 榜单列表 -->
            </el-aside>

            <!-- 右侧main -->
            <el-main class="home-main">
              <!-- 登录 -->
              <homeLogin></homeLogin>
              <router-view></router-view>
              
              <!-- 入驻歌手 -->
              <div class="singerlist-title">
                <div>入驻歌手</div>
                <!-- <div @click="allSinger">查看全部>></div> -->
                <div>查看全部>></div>
              </div>
              <div class="singerlist" v-for="(item,index) in singerList" :key="index">
                <div class="singer">
                  <img :src="item.picture_url" alt />
                  <span>{{item.name}}</span>
                </div>
              </div>
            </el-main>
          </el-container>
        </div>
      </div>
      <div class="footer">
        <div class="mm" style="position:relative">
          <div class="nn">
            <el-breadcrumb separator="|" style="font-size:12px;">
              <el-breadcrumb-item>
                <a href="https://st.music.163.com/official-terms/service">服务条款</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="https://st.music.163.com/official-terms/children">儿童隐私政策</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="https://music.163.com/st/staticdeal/complaints.html">版权投诉指引</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="https://st.music.163.com/official-terms/service">意见反馈</a>
              </el-breadcrumb-item>
            </el-breadcrumb>
            <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
              <span style="margin-right:18px">网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              >浙网文[2018]3506-263号</a>
            </p>
            <br />
            <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
              <span style="margin-right:18px">违法和不良信息举报电话：0571-89853516</span>
              <span>举报邮箱：</span>
              <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <br />
            <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
              <span style="margin-right:18px">粤B2-20090191-18</span>
              <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action">工业和信息化部备案管理系统网站</a>
            </p>
          </div>
          <div class="ul" style="width:240px;position:absolute;right:60px;top:20px">
            <ul style="display:flex">
              <li style="margin-right:10px">
                <a href="https://music.163.com/st/userbasic#/auth">
                  <img src="../assets/用户认证.jpg" alt style="width:40px;height:40px;" />
                </a>
                <p style="font-size:12px;">用户认证</p>
              </li>
              <li style="margin-right:10px">
                <a href="https://music.163.com/nmusician/web/index#/">
                  <img src="../assets/独立音乐人.jpg" alt style="width:40px;height:40px;" />
                </a>
                <p style="font-size:12px;">独立音乐人</p>
              </li>
              <li style="margin-right:10px">
                <a href="https://music.163.com/web/reward">
                  <img src="../assets/赞赏.jpg" alt style="width:40px;height:40px;" />
                </a>
                <p style="font-size:12px;">赞赏</p>
              </li>
              <li style="margin-right:10px">
                <a
                  href="https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan"
                >
                  <img src="../assets/视频奖赏.jpg" alt style="width:40px;height:40px;" />
                </a>
                <p style="font-size:12px;">视频奖励</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部音乐播放控制器 -->
    <musicPlay></musicPlay>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Bus from "../bus/Bus.js";
import axios from "axios";
import musicPlay from "../components/musicPlay.vue";
import singleSong from "../components/singleSong.vue";
import homeLogin from "../components/homeLogin.vue"
import lunbotu1 from "../assets/Home-images/lunbotu/01.jpg";
import lunbotu2 from "../assets/Home-images/lunbotu/02.jpg";
import lunbotu3 from "../assets/Home-images/lunbotu/03.jpg";
import lunbotu4 from "../assets/Home-images/lunbotu/04.jpg";
import lunbotu5 from "../assets/Home-images/lunbotu/05.jpg";
import lunbotu6 from "../assets/Home-images/lunbotu/06.jpg";
import lunbotu7 from "../assets/Home-images/lunbotu/07.jpg";
import lunbotu8 from "../assets/Home-images/lunbotu/08.jpg";

export default {
  name: "home",
  // props: {
  //   isLogin: Boolean
  // },
  data: function() {
    return {
      activeIndex: "0",
      hotMusicCover: [],
      newMusicCover: [],
      singerList: [],
      sing: {},
      isPlay: false,
      current: "0",
      lunbotuArr: [
        { src: lunbotu1 },
        { src: lunbotu2 },
        { src: lunbotu3 },
        { src: lunbotu4 },
        { src: lunbotu5 },
        { src: lunbotu6 },
        { src: lunbotu7 },
        { src: lunbotu8 }
      ]
    };
  },
  components: {
    musicPlay: musicPlay,
    homeLogin: homeLogin
  },
  created() {
    console.log("---进入created---");

    axios.get("/getAllmusic").then(res => {
      this.hotMusicCover = res.data.slice(0,8);
      this.newMusicCover = res.data.slice(8,16);
    });
    axios.get("/getSingerList").then(res => {
      this.singerList = res.data;
    });
  },
  
  methods: {
    downloadClient() {
      this.$router.push({ path: "/downloadclient" });
    },

    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$router.push("/playlist");
          break;
        case "2":
          this.$route.path == "/playlist/chinese"
            ? ""
            : this.$router.push("/playlist/chinese");
          break;
        case "3":
          this.$route.path == "/playlist/popular"
            ? ""
            : this.$router.push("/playlist/popular");
          break;
        case "4":
          this.$route.path == "/playlist/rock"
            ? ""
            : this.$router.push("/playlist/rock");
          break;
        case "5":
          this.$route.path == "/playlist/ballad"
            ? ""
            : this.$router.push("/playlist/ballad");
          break;
        case "6":
          this.$route.path == "/playlist/electronic"
            ? ""
            : this.$router.push("/playlist/electronic");
          break;
        case "7":
          this.$route.path == "/playlist/more"
            ? ""
            : this.$router.push("/playlist/more");
          break;
      }
    },
    setActiveIndex() {
      switch (this.$route.path) {
        case "/playlist":
          this.activeIndex = 1;
          break;
        case "/playlist/chinese":
          this.activeIndex = 2;
          break;
        case "/playlist/popular":
          this.activeIndex = 3;
          break;
        case "/playlist/rock":
          this.activeIndex = 4;
          break;
        case "/playlist/ballad":
          this.activeIndex = 5;
          break;
        case "/playlist/electronic":
          this.activeIndex = 6;
          break;
        case "/playlist/more":
          this.activeIndex = 7;
          break;
      }
    },
    // allSinger() {
    //   this.$router.push({ path: "/allsinger" });
    // },
    playMusic(index, event) {
      this.current = index;
      console.log("被点击的current:" + this.current);
        let hotAudio = document.querySelectorAll(".hot-audio");
      if (this.isPlay == false) {
        hotAudio[index].play();
        this.isPlay = true;
        console.log("上一次点击的hotAudio:" + hotAudio);
        console.log(this.isPlay);
      } else {
        hotAudio[index].pause();
        this.isPlay = false;
        console.log(this.isPlay);
      }
      console.log(index);
    },
    // 根据点击歌曲封面的不同进入不同单曲页面
    toSingleSong(index,$event) {
      let songId = this.hotMusicCover[index].id;
      console.log("---当前点击对象---" + this.hotMusicCover)
      // Bus.$emit("singleSongInfo",this.hotMusicCover[index])
      this.$router.push({
        path: "/singlesong",
        query: {
          id: songId
        }
      });
    }
  }
};
</script>

<style lang="scss">
//scoped属性问题

.lunbo {
  width: 100%;
  height: 285px;
  position: relative;
  margin-top: -1px;
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: fff;
  }

  .el-carousel__item {
    height: 283.88px;
  }
  .el-carousel__container {
    height: 283.88px;
  }
}

//轮播图组件的滚动条，不起作用
.el-carousel .el-carousel--horizontal {
  overflow-x: unset;
}

.el-carousel__item img {
  width: 730px;
  height: 283.88px;
  position: absolute;
  top: 0;
  left: 186px;
}

.download {
  width: 254px;
  height: 285px;
  background-color: #0d0d0d;
  z-index: 99;
  position: relative;
  margin-left: 916px;
  .el-button {
    width: 215px;
    height: 56px;
    line-height: 0;
    font-size: 20px;
    background-color: #3475db;
    border: none;
    margin-top: 185px;
  }
  .icon-xiazai {
    font-size: 26px;
    vertical-align: middle;
  }
  .clientName {
    font-size: 12px;
    color: #797877;
    margin-top: -8px;
  }
}
.download img:first-of-type {
  width: 200px;
  position: absolute;
  top: 40px;
  left: 20px;
}
.download img:last-of-type {
  height: 70px;
  position: absolute;
  top: 100px;
  right: 35px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
//音乐列表
.musicList {
  margin: 0 180px 0 185px;
  border: 1px solid #ccc;
}
//热门推荐导航栏
// .el-menu-demo{
//   border-bottom: 2px solid #C10D0C;
// }

.hot-nav {
  width: 730px;
  border-bottom: 3px solid red;
}

.hotTag {
  color: #cd0e15;
}

// 热门推荐列表 musicList左边部分
.hot-song-cover {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.single-song-cover {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 10px 20px;
  .icon-bofang:before {
    color: #cd0e15;
    display: inline-block;
    position: absolute;
    right: 10px;
    bottom: 7px;
    border: 2px solid #cd0e15;
    border-radius: 50%;
    padding: 3px 3px;
  }
}
.audio {
  width: 140px;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
}
//musicList右边部分

.hot-list {
  .el-aside {
    border-right: 1px solid #ccc;
  }
  .el-main {
    margin: 0;
    padding: 0;
  }
}


.singerlist {
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
}
.singerlist-title {
  height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  box-sizing: border-box;
}
.singer {
  width: 200px;
  height: 62px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 5px 0;
  background-color: #fafafa;
}
.singer img {
  width: 62px;
  height: 62px;
  float: left;
}
.footer {
  height: 140px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-right: none;
}
.mm {
  margin: 0 120px;
}
.nn {
  margin-top: 10px;
}
li {
  list-style: none;
  margin: 0 auto;
}
</style>