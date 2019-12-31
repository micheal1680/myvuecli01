<template>
   <div>
       <button type="text" id="login" @click="open">立即登录</button>
       <!-- <img src="../public/img/login.jpg" alt=""> -->
   </div>
</template>

<script>
export default {
     methods: {
      open() {
        this.$alert('<button style="background-color: #3584D0; color:white;width: 150px;border-radius: 6px">手机号登录</button><br><button style="width: 150px;border-radius: 6px">注册</button>', '登录', {
          dangerouslyUseHTMLString: true
        });
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