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
      <el-menu-item index="1" @click="Login">后台管理</el-menu-item>
    </el-menu>

   

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import footers from "./components/footer.vue"
import login from "../src/components/login.vue";
import register from "../src/components/register.vue"
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
       
      ]
    };
  },
  components: {
    login: login,
    register: register
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$route.path == "/" ? "" : this.$router.push("/");
          break;
      }
    },
    
    setActiveIndex() {
      switch (this.$route.path) {
        case "/":
          this.activeIndex = "1";
          break;
      }
    },
    Login(){
      this.$router.push({path: "/login"})
    },
    // tuichu() {
    //   // 点击"退出"，清除本地缓存中的登录状态，即退出登录
    //   localStorage.clear("loginStatus");
    //   //点击退出后，刷新发现页面登录框（bus没有效果）      
    //   var localS = localStorage.getItem("loginStatus")
    //   Bus.$emit("changeLoginStatus","false")
    //   console.log("点击退出")
    //   // parent.location.reload(); 
    // },
    
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
