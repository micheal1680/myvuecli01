<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index>
        <a href="#">
          <img src="../public/img/logo1.jpg" alt />
        </a>
      </el-menu-item>
      <el-menu-item index="1">发现音乐</el-menu-item>
      <el-menu-item index="2">我的音乐</el-menu-item>
      <el-menu-item index="4">
        <el-select v-model="keyWord" filterable placeholder="请输入内容">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @keyup.enter="handleSearch"
          ></el-option>
        </el-select>
      </el-menu-item>
      <el-menu-item index="5">商城</el-menu-item>
      <el-submenu index="3">
        <template slot="title">个人中心</template>
        <el-menu-item index="3-1">我的主页</el-menu-item>
        <el-menu-item index="3-2">个人设置</el-menu-item>
        <el-menu-item index="3-3" @click="tuichu">退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">后台管理</el-menu-item>
    </el-menu>
    <!-- <test-footer></test-footer> -->
    <!-- <router-view></router-view> -->

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import footers from "./components/footer.vue"
export default {
  data() {
    return {
      keyWord: "",
      activeIndex: "1",
      restaurants: [],
      value: "",
      state: "",
      timeout: null,
      options: [
        // {
        //   value: "选项1",
        //   label: "阿黛尔"
        // },
        // {
        //   value: "选项2",
        //   label: "碧昂丝"
        // },
        // {
        //   value: "选项3",
        //   label: "亚瑟小子"
        // },
        // {
        //   value: "选项4",
        //   label: "周杰伦"
        // },
        // {
        //   value: "选项5",
        //   label: "邓紫棋"
        // }
      ]
    };
  },
  // components:{
  //   "test-footer":footers
  // },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$route.path == "/" ? "" : this.$router.push("/");
          break;
        case "2":
          this.$route.path == "/musicPage"
            ? ""
            : this.$router.push("/musicPage");
          break;
        case "3":
          this.$route.path == "/info" ? "" : this.$router.push("/info");
          break;
        case "3-1":
          this.$route.path == "/mymain" ? "" : this.$router.push("/mymain");
          break;
        case "3-2":
          this.$route.path == "/setting" ? "" : this.$router.push("/setting");
          break;
        case "3-3":
          this.$route.path == "/" ? "" : this.$router.push("/");
          break;
        case "5":
          this.$route.path == "/product" ? "" : this.$router.push("/product");
          break;
        case "6":
          this.$route.path == "/Backstage" ? "" : this.$router.push("/Backstage");
          break;
      }
    },
    handleSearch(data) {
      this.getMusic(data);
    },
    getMusic(data) {
      (data = data ? data : ""),
        axios
          .get("http://localhost:8888/getMusic", {
            params: {
              keyWord: data
            }
          })
          .then(res => {
            this.options = res.data;
          });
    },
    setActiveIndex() {
      switch (this.$route.path) {
        case "/":
          this.activeIndex = "1";
          break;
        case "/musicPage":
          this.activeIndex = "2";
          break;
        case "/info":
          this.activeIndex = "3";
          break;
        case "/mymain":
          this.activeIndex = "3-1";
          break;
        case "/setting":
          this.activeIndex = "3-2";
          break;
        // case "/":
        //   this.activeIndex = "3-3";
        //   break;
        case "/product":
          this.activeIndex = "5";
          break;
        case "/Backstage":
          this.activeIndex = "6";
          break;
      }
    },
    tuichu() {
      // 点击"退出"，清除本地缓存中的登录状态，即退出登录
      localStorage.clear("loginStatus");
    },
    loadAll() {
      return;
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelectjr(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  watch: {
    "$route.path": function() {
      this.setActiveIndex();
    }
  },
  created() {
    this.setActiveIndex();
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
a {
  width: 180px;
  height: 60px;
}
img {
  margin: auto 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#footer {
  height: 200px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
