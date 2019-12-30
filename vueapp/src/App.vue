<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">发现音乐</el-menu-item>
  <el-menu-item index="2">我的音乐</el-menu-item>
   <el-submenu index="3">
    <template slot="title">个人中心</template>
    <el-menu-item index="3-1">我的主页</el-menu-item>
    <el-menu-item index="3-2">个人设置</el-menu-item>
    <el-menu-item index="3-3">退出</el-menu-item>
  </el-submenu>
</el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch(key){
          case "1":this.$route.path=="/"?"":this.$router.push("/");break;
          case "2":this.$route.path=="/my"?"":this.$router.push("/my");break;
          case "3":this.$route.path=="/info"?"":this.$router.push("/info");break
        }
      },
      setActiveIndex(){
        switch(this.$route.path){
          case "/":this.activeIndex="1";break;
          case "/my":this.activeIndex="2";break;
          case "/info":this.activeIndex="3";break;
        }
      }
    },
    watch:{
       "$route.path":function(){
        this.setActiveIndex()
      }
    },
    created(){
      this.setActiveIndex()
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
