<template>
  <div>
    <div class="box">
      <div class="big">
        <div class="left" style="margin:80px">
          <img src="../assets/my.jpg" alt />
        </div>
        <div class="right" style="margin:80px">
          <p style="font-size: 32px;  ">登录网易云音乐</p>
          <p>查看并管理你收藏的私房音乐，方便地随时随地收听</p>
          <img style="margin:12px 20px;" src="../assets/my1.jpg" alt />
          <br />
          <button type="text" id="login" @click="login">立即登录</button>
          <button type="text" id="register" @click="register">注册</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="mm" style="position:relative">
        <div class="nn" >
          <el-breadcrumb separator="|" style="font-size:12px;">
            <el-breadcrumb-item>
              <a href="https://st.music.163.com/official-terms/service">服务条款</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="https://st.music.163.com/official-terms/children">儿童隐私政策</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="https://music.163.com/st/staticdeal/complaints.html">版权投诉指引</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="https://st.music.163.com/official-terms/service">意见反馈</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
            <span style="margin-right:18px">网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
            >浙网文[2018]3506-263号</a>
          </p>
          <br />
          <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
            <span style="margin-right:18px">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <br />
          <p style="margin:0 80px 6px 0;font-size:12px;position:absolute;left:0">
            <span style="margin-right:18px">粤B2-20090191-18</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action">工业和信息化部备案管理系统网站</a>
          </p>
        </div>
        <div class="ul" style="width:240px;position:absolute;right:60px;top:20px">
          <ul style="display:flex">
            <li style="margin-right:10px">
              <a href="https://music.163.com/st/userbasic#/auth">
                <img src="../assets/用户认证.jpg" alt style="width:40px;height:40px;" />
              </a>
              <p style="font-size:12px;">用户认证</p>
            </li>
            <li style="margin-right:10px">
              <a href="https://music.163.com/nmusician/web/index#/">
                <img src="../assets/独立音乐人.jpg" alt style="width:40px;height:40px;" />
              </a>
              <p style="font-size:12px;">独立音乐人</p>
            </li>
            <li style="margin-right:10px">
              <a href="https://music.163.com/web/reward">
                <img src="../assets/赞赏.jpg" alt style="width:40px;height:40px;" />
              </a>
              <p style="font-size:12px;">赞赏</p>
            </li>
            <li style="margin-right:10px">
              <a
                href="https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan"
              >
                <img src="../assets/视频奖赏.jpg" alt style="width:40px;height:40px;" />
              </a>
              <p style="font-size:12px;">视频奖励</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
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
#login,#register {
  width: 150px;
  height: 30px;
  background-color: #3584d0;
  color: white;
  font-size: 16px;
  border-radius: 6px;
}
.box {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0 120px;
  box-sizing: border-box;
}
.big {
  display: flex;
  height: 700px;
  justify-content: space-between;
  background-color: white;
}
.footer {
  height: 140px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-right: none;
}
.mm {
  margin: 0 120px;
}
.nn{
  margin-top: 10px;
}
li {
  list-style: none;
  margin: 0 auto;
}
</style>