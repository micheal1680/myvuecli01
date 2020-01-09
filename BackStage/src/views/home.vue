<template>
  <div>
      <div @click="BackStageLogin">后台</div>
  </div>
</template>

<script>
export default {
    methods: {
    BackStageLogin(){
      this.$router.push({path: "/login"})
    }
  }
}
}
</script>

<style>

</style>