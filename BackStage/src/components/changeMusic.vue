<template>
  <div class="layui-layout-body">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <dl class="layui-nav-child">
                <dd>
                  <router-link to="/Backstage">商品管理</router-link>
                </dd>
                <dd>
                  <router-link to="/AddMusic">添加商品</router-link>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href>退了</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div style="padding: 15px;">
          <h2>修改商品</h2>
          <hr />
          <form class="layui-form" action ref="ruleForm" :model="ruleForm">
            <div class="layui-form-item">
              <label class="layui-form-label">
                歌手
                <span class="red">*</span>
              </label>
              <div class="layui-input-block" prop="name">
                <input
                  v-model="ruleForm.name"
                  type="text"
                  name="name"
                  required
                  lay-verify="required"
                  placeholder="请输入歌手名字"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">
                歌名
                <span class="red">*</span>
              </label>
              <div class="layui-input-block" prop="title">
                <input
                  v-model="ruleForm.title"
                  type="text"
                  name="title"
                  required
                  lay-verify="required"
                  placeholder="请输入歌曲名字"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">
                时长
                <span class="red">*</span>
              </label>
              <div class="layui-input-block" prop="time">
                <input
                  v-model="ruleForm.time"
                  type="text"
                  name="time"
                  required
                  lay-verify="required"
                  placeholder="请输入歌曲时长"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">
                音乐地址
                <span class="red">*</span>
              </label>
              <div class="layui-input-block" prop="music_url">
                <input
                  v-model="ruleForm.music_url"
                  type="text"
                  name="music_url"
                  required
                  lay-verify="required"
                  placeholder="请输入音乐地址"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>

            <div class="layui-form-item">
              <label class="layui-form-label">音乐播放量</label>
              <div class="layui-input-block" prop="clicks">
                <input
                  v-model="ruleForm.clicks"
                  type="text"
                  name="clicks"
                  placeholder="请输入音乐播放量"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>

            <div class="layui-form-item">
              <label class="layui-form-label">歌曲图片</label>
              <div class="layui-input-block" prop="picture_url">
                <input
                  v-model="ruleForm.picture_url"
                  type="text"
                  name="picture_url"
                  placeholder="请输入音乐图片地址"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>

            <div class="layui-form-item">
              <div class="layui-input-block">
                <button
                  class="layui-btn"
                  type="button"
                  lay-submit
                  @click="changemusic('ruleForm')"
                >立即修改</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="layui-footer">
        <!-- 底部固定区域 -->
        © layui.com - 底部固定区域
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // ruleForm:{},
      ruleForm: {
        id: "",
        name: "",
        title: "",
        time: "",
        music_url: "",
        clicks: "",
        picture_url: ""
      }
    };
  },
  created() {
    let index = this.$route.query.id;
    this.axios
      .get("/getname", {
        params: {
          index: index
        }
      })
      .then(result => {
        // 将获取到的值渲染到ruleForm这个表单中。表单数据是对象，表格数据是数组
        let arr = result.data;
        this.ruleForm = arr[0];
        console.log(this.ruleForm);
      });
    // Bus.$on("changemusic", (tableIDindex) => {
    //   that.tableIDindex = tableIDindex;
    //   console.log('this'+that.tableIDindex);

    // });
  },
  methods: {
    changemusic(formName) {
      let index = this.$route.query.id;
      console.log(index);
      console.log(this.ruleForm);
      console.log(formName);
      console.log(this.$refs[formName]);

      this.axios
        .post("/changemusic", {
          index: index,
          name: this.ruleForm.name,
          title: this.ruleForm.title,
          time: this.ruleForm.time,
          music_url: this.ruleForm.music_url,
          clicks: this.ruleForm.clicks,
          picture_url: this.ruleForm.picture_url
        })
        .then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: "修改商品成功",
              type: "success"
            });
            console.log("修改商品：" + res.data);
          } else {
            this.$message.error("该歌曲已存在");
          }
        });
    }
  }
};
</script>

<style scoped>
.layui-input,
.layui-textarea,
.layui-input-block {
  width: 300px;
}

.red {
  color: red;
  font-size: 18px;
}

.mybtn-location {
  margin: 10px 0 20px 110px;
}
</style>