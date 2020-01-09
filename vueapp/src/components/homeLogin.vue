<template>
  <div>
    <!-- 登录 -->
    <div class="home-login" v-if="isLogedIn">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <el-button class="home-login-button" type="primary" @click="homeLogin">用户登录</el-button>
    </div>

    <!-- 登录后显示个人信息 -->
    <div class="home-userinfo" v-else>
      <img :src="userPicture" alt />
      <div>{{username}}</div>
      <div>
        <p>LV.{{level}}</p>
        <el-row>
          <el-button type="primary" @click="signIn">签到</el-button>
        </el-row>
      </div>
      <div>
        <div>关注：{{follow}}</div>
        <div>粉丝：{{fans}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "../bus/Bus.js"
export default {
  data: function() {
    return {
      isLogedIn: true,
      userPicture: "",
      username: "",
      level: 0,
      follow: 0,
      fans: 0
    };
  },
  methods: {
    homeLogin() {
      this.$router.push({ path: "/login" });
    },
    signIn() {
      this.level++;
    }
  },
  created() { 

    console.log("---进入update---");
    //登录回到home页面后改变登录框
    if (localStorage.getItem("loginStatus") == "true") {
      this.isLogedIn = false;
    } else {
      this.isLogedIn = true;
      console.log(this.isLogedIn); //true
    }
    //登录后获取用户名，头像
    this.username = localStorage.getItem("username");
    axios
      .post("/getUserPicture", {
        username: this.username
      })
      .then(res => {
        this.userPicture = res.data[0].url;
        // parent.location.reload();
      });

      Bus.$on("changeLoginStatus", val => {
      this.isLogedIn = val;
      console.log("---watch---" + this.isLogedIn);

      if (localStorage.getItem("loginStatus") == "true") {
        this.isLogedIn = false;
      } else {
        this.isLogedIn = true;
        console.log(this.isLogedIn); //true
      }      
    });
    parent.location.reload;
  }
};
</script>

<style lang="scss">
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
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>