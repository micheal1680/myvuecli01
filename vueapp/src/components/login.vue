<template>
  <div class="logincss">
    这里是登录页面
    <el-form ref="ruleForm" :model="ruleForm" label-width="80px" style="width:450px">
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // onSubmit(formName) {
    // 		this.$refs[formName].validate((valid) => {
    // 			console.log(valid)
    // 			if (valid) {
    //         alert('登录成功!');
    //         this.$router.push("/musicPage")
    // 			} else {
    // 				console.log('登录失败!');
    // 				return false;
    // 			}
    // 		});
    // },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/userlogin", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.data.status == 0) {
                alert("登录成功!");
                this.msg = res.data.msg;
                this.$router.push("/musicPage");
              } else if (res.data.status == 1) {
                alert("用户密码输入错误!");
                this.msg = res.data.msg;
              } else {
                alert("用户名输入错误!");
                this.msg = res.data.msg;
              }
            });
        } else{
          return false;
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