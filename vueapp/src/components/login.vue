<template>
  <div class="logincss">
    这里是登录页面
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.axios
        .post("/userLogin", {
          name: this.form.name,
          password: this.form.password
        })
        .then(result => {
            console.log(result)

          this.$message({
            message: result.data.msg
          });
          if (result.data.status == 0) {
            
            this.$router.push("/");
           
          }
        });
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style>
.logincss {
  width: 450px;
  margin: 0 auto;
}
</style>