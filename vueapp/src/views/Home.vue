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
                  @click="playMusic(index,$event)"
                >
                  <img class="cover" :src="item.picture_url" alt />
                  <!-- <audio class="audio" :src="item.music_url" controls="controls" :isPlay="false"></audio> -->
                  <audio class="audio hot-audio" controls="controls" :src="item.music_url"></audio>
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
                <div class="single-song-cover" v-for="(item,index) in hotMusicCover" :key="index">
                  <img :src="item.picture_url" alt />

                  <audio class="audio" :src="item.music_url" controls="controls"></audio>
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
              <div class="home-login">
                <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <el-button class="home-login-button" type="primary" @click="homeLogin">用户登录</el-button>
              </div>

              <!-- 登录后显示个人信息 -->
              <div class="home-userinfo">
                <img :src="userPicture" alt />
                <div>{{username}}</div>
                <div>
                  <p>LV.{{level}}</p>
                  <el-row>
                    <el-button type="primary" @click="singIn">签到</el-button>
                  </el-row>
                </div>
                <div>
                  <div>关注：{{follow}}</div>
                  <div>粉丝：{{fans}}</div>
                </div>
              </div>

              <!-- 入驻歌手 -->
              <div class="singerlist-title">
                <div>入驻歌手</div>
                <div @click="allSinger">查看全部>></div>
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
    <!-- 底部信息 -->
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import lunbotu1 from "../assets/Home-images/lunbotu/01.jpg";
import lunbotu2 from "../assets/Home-images/lunbotu/02.jpg";
import lunbotu3 from "../assets/Home-images/lunbotu/03.jpg";
import lunbotu4 from "../assets/Home-images/lunbotu/04.jpg";
import lunbotu5 from "../assets/Home-images/lunbotu/05.jpg";
import lunbotu6 from "../assets/Home-images/lunbotu/06.jpg";
import lunbotu7 from "../assets/Home-images/lunbotu/07.jpg";
import lunbotu8 from "../assets/Home-images/lunbotu/08.jpg";
//import footer from "../components/footer.vue"  不能用footer作为组件名

export default {
  name: "home",
  data: function() {
    return {
      activeIndex: "0",
      hotMusicCover: [],
      userPicture: "",
      username: "",
      level: 0,
      follow: 0,
      fans: 0,
      singerList: [],
      isPlay: false,
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
  created() {
    // var that = this;
    axios.get("/getHotmusic").then(res => {
      this.hotMusicCover = res.data;
      console.log(this.hotMusicCover);
    });
    axios.get("/getSingerList").then(res => {
      this.singerList = res.data;
    });
  },
  watch: {
    isPlay() {}
  },
  methods: {
    downloadClient() {
      this.$router.push({ path: "/downloadclient" });
      //回到home页面改变登录框
    },
    homeLogin() {
      this.$router.push({ path: "/login" });
    },
    singIn() {},
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
    allSinger() {
      this.$router.push({ path: "/allsinger" });
    },
    playMusic(index, event) {
      let hotAudio = document.querySelectorAll(".hot-audio");
      if (this.isPlay == false) {
        hotAudio[index].play();
        this.isPlay = true;
        console.log(this.isPlay);
      } else {
        hotAudio[index].pause();
        this.isPlay = false;
        console.log(this.isPlay);
      }
      console.log(index);
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
.home-login {
  width: 250px;
  height: 130px;
  background-color: #ececec;
  padding: 20px;
  .home-login-button {
    background-color: #cd0e15;
    border: none;
    width: 100px;
    height: 30px;
    line-height: 0px;
  }
  p {
    font-size: 12px;
    line-height: 14px;
  }
}

// 登录后个人信息状态
.home-userinfo {
  width: 250px;
  height: 150px;
  background-color: #ececec;
  margin: 0;
  padding: 0;
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