<template>
   <div>
       <button type="text" id="login" @click="login">立即登录</button>
       <button type="text" id="register" @click="register">注册</button>
       <!-- <img src="../public/img/login.jpg" alt=""> -->
   </div>
</template>

<script>

export default {
     methods: {
        login(){
            this.$router.push({path:"/login"})
        },
        register(){
            this.$router.push({path:"/register"})
        }
      }
    }
</script>

<style>
#login{
    width: 150px;
    height: 30px;
    background-color: #3584D0;
    color: white;
    font-size: 16px;
    border-radius: 6px
}
</style>