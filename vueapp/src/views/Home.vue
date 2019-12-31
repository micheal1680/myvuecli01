<template>
  <div class="lunbo">
    <!-- 轮播图 -->
    <div class="lunbotu">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="(item,index) in lunbotuArr" :key="index">
          <img :src="item.src" alt />
        </el-carousel-item>
        <div class="download">
          <img src="../assets/Home-images/download/01.png" alt />
          <img src="../assets/Home-images/download/02.png" alt />
          <el-row>
            <el-button type="primary" @click="downloadClient">
              <i class="iconfont icon-xiazai"></i>
              下载客户端</el-button>
          </el-row>
          <p class="clientName">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </el-carousel>
    </div>
    <!-- 下载客户端 -->

    <!-- 热门推荐导航栏 -->
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">热门推荐</el-menu-item>
        <el-menu-item index="2">华语|</el-menu-item>
        <el-menu-item index="3">流行|</el-menu-item>
        <el-menu-item index="4">摇滚|</el-menu-item>
        <el-menu-item index="5">民谣|</el-menu-item>
        <el-menu-item index="6">电子|</el-menu-item>
        <el-menu-item index="7">更多</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
    <!-- 热门推荐列表 -->
    <el-container>
      <el-aside width="200px">
        Aside
        <hotRecommend></hotRecommend>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
    <!-- 底部信息 -->
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import lunbotu1 from "../assets/Home-images/lunbotu/01.jpg";
import lunbotu2 from "../assets/Home-images/lunbotu/02.jpg";
import lunbotu3 from "../assets/Home-images/lunbotu/03.jpg";
import lunbotu4 from "../assets/Home-images/lunbotu/04.jpg";
import lunbotu5 from "../assets/Home-images/lunbotu/05.jpg";
import lunbotu6 from "../assets/Home-images/lunbotu/06.jpg";
import lunbotu7 from "../assets/Home-images/lunbotu/07.jpg";
import lunbotu8 from "../assets/Home-images/lunbotu/08.jpg";
import hotRecommend from "../components/hotRecommend.vue";
//import footer from "../components/footer.vue"  不能用footer作为组件名

export default {
  name: "home",
  data: function() {
    return {
      activeIndex: "0",
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
  methods: {
    downloadClient(){
      this.$router.push({path: "/downloadclient"})
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$route.path);
      switch (key) {
        case "1":
          this.$router.push("/discover");
          break;
        case "2":
          this.$route.path == "/chinese" ? "" : this.$router.push("/chinese");
          break;
        case "3":
          this.$route.path == "/popular" ? "" : this.$router.push("/popular");
          break;
        case "4":
          this.$route.path == "/rock" ? "" : this.$router.push("/rock");
          break;
        case "5":
          this.$route.path == "/ballad" ? "" : this.$router.push("/ballad");
          break;
        case "6":
          this.$route.path == "/electronic"
            ? ""
            : this.$router.push("/electronic");
          break;
        case "7":
          this.$route.path == "/more" ? "" : this.$router.push("/more");
          break;
      }
      console.log(this.$route.path);
    },
    setActiveIndex() {
      switch (this.$route.path) {
        case "/discover":
          this.activeIndex = 1;
          break;
        case "/chinese":
          this.activeIndex = 2;
          break;
        case "/popular":
          this.activeIndex = 3;
          break;
        case "/rock":
          this.activeIndex = 4;
          break;
        case "/ballad":
          this.activeIndex = 5;
          break;
        case "/electronic":
          this.activeIndex = 6;
          break;
        case "/more":
          this.activeIndex = 7;
          break;
      }
    }
  },
  components: {
    hotRecommend: hotRecommend
    // "footer": footer
  }
};
</script>

<style lang="scss">
.lunbo {
  width: 100%;
  height: 285px;
  position: relative;
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
  .icon-xiazai{
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

// 热门推荐
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>