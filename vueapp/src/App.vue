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
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="音乐/视频/电台/用户"
          @select="handleSelectjr"
        ></el-autocomplete>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">个人中心</template>
        <el-menu-item index="3-1">我的主页</el-menu-item>
        <el-menu-item index="3-2">个人设置</el-menu-item>
        <el-menu-item index="3-3">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- <test-footer></test-footer> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import footers from "./components/footer.vue"
export default {
  data() {
    return {
      activeIndex: "1",
      restaurants: [],
      state: "",
      timeout: null
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
          this.$route.path == "/my" ? "" : this.$router.push("/my");
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
          this.$route.path == "/out" ? "" : this.$router.push("/out");
          break;

      }
    },
    setActiveIndex() {
      switch (this.$route.path) {
        case "/":
          this.activeIndex = "1";
          break;
        case "/my":
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
        case "/out":
          this.activeIndex = "3-3";
          break;
      }
    },
    loadAll() {
      return;
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelectjr(item) {
      console.log(item);
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
</style>
