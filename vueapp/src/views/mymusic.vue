<template>
  <div>
      <button type="text" id="login" @click="login">立即登录</button>
      <button type="text" id="register" @click="register">注册</button>
</div>
</template>

<script>
export default {
  data:function(){
   return {
       
   }
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<style>
#login,
#register {
  width: 150px;
  height: 30px;
  background-color: #3584d0;
  color: white;
  font-size: 16px;
  border-radius: 6px;
}
</style>