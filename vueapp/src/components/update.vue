<template>
  <div class="update">
    <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
      <el-form-item label="昵称：">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="介绍：">
        <el-input type="textarea" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="保密"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日：">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.birth"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="地区：">
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
          v-model="ruleForm.location"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button type="primary" @click="updateForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" }
              ]
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" }
              ]
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" }
              ]
            }
          ]
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" }
              ]
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" }
              ]
            }
          ]
        }
      ],
      ruleForm: {
        nickname: "",
        description: "",
        sex: "",
        birth: "",
        location: "",
        region: "",
        delivery: false,
        type: []
      }
    };
  },
  created(){
    // 要想一访问页面，数据就在页面上，可以在created()里面写具体展示想要数据的方法，因为created()是创建周期函数，因此一打开页面就直接先执行created函数里面的东西
    // 获取本地缓存的登录用户名
    var username=localStorage.getItem("username")
    this.axios.get("/getnick",{
      params: {
        username:username
      }
    }).then(result=>{
      // 将获取到的值渲染到ruleForm这个表单中。表单数据是对象，表格数据是数组
        this.ruleForm=result.data
    })

  },
  methods: {
    submitForm(formName) {
      console.log("submit!");
      var username=localStorage.getItem("username")
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/myset", {
              username:username,
              nickname: this.ruleForm.nickname,
              description: this.ruleForm.description,
              sex: this.ruleForm.sex,
              birth: this.ruleForm.birth,
              location: this.ruleForm.location
            })
            .then(res => {
              if (res.data.code == 0) {
                this.$message({
                  message: "保存成功",
                  type: "success"
                });
              } else {
                this.$message.error("该昵称已存在");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    updateForm(formName) {
      console.log("submit!");
      var username=localStorage.getItem("username")
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/updateset", {
              username:username,
              nickname: this.ruleForm.nickname,
              description: this.ruleForm.description,
              sex: this.ruleForm.sex,
              birth: this.ruleForm.birth,
              location: this.ruleForm.location
            })
            .then(res => {
              if (res.data.code == 0) {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
              } else {
                this.$message.error("该昵称已存在");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-form {
  width: 50%;
}
.update {
  color: black;
}
</style>