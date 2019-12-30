<template>
  <div>{{msg}}
      <login1></login1>
  </div>
  
</template>

<script>
import login from "../components/wlcomponents/login.vue"
export default {
    data:function(){
        return {
            msg:'个人中心1111'
        }
    },
    
    components:{
        "login1":login
    }

}
</script>

<style>

</style>