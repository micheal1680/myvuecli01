<template>
  <div>
    <div>
      <el-container>
        <el-header class="toubu">
          <div>网易云音乐.商城</div>
          <div>
            <!-- <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="input2"  @keyup.enter="serachproduct" > -->

            <!-- </el-input> -->
            <input type="text" placeholder="请输入搜索内容" v-model="input2" @keyup.enter="serachproduct" />
          </div>

          <div>购物车</div>
          <div>
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">登录</template>
                <el-menu-item index="1-1">手机号登录</el-menu-item>
                <el-menu-item index="1-2">微信登录</el-menu-item>
                <el-menu-item index="1-3">微博登录</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </el-header>
        <!-- 内容部分 -->
        <el-main>
          <div>
            <el-carousel indicator-position="outside" interval:3000>
              <el-carousel-item v-for="item in img" :key="item">
                <h3>
                  <img :src="item" />
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">热销爆品</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">ip周边</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">数码影音</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">积分商城</div>
              </el-col>
            </el-row>
          </div>
          <!-- 热门商品 -->
          <div>热门商品</div>
          
          <div class="hot">
            <div class="hot-product" v-for="(item, myid) in pruducthot" :key="myid=item.id">
              <div class="img_pr" @click="toProductDetails(item.id)" >
                <!-- <router-link to="/product/productDetails"><img :src="item.picture_url" alt /></router-link> -->
                <img :src="item.picture_url" />
              </div>
              <div @click="toProductDetails(item.id)">{{item.name}}</div>
              <div>￥{{item.newprice}}</div>
              
            </div>
          </div>
        </el-main>
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
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      activeIndex2: "1",
      img: [
        "http://p1.music.126.net/RNvKjlA4F2U654i2dX-d2g==/109951164592221351.jpg?imageView&quality=89",
        "http://p4.music.126.net/iL6K9bXqvqeYwO0xhIbN3w==/109951164591910139.jpg"
      ],
      pruducthot: [],
      
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    serachproduct() {
      // console.log("搜索1111_________")
      this.axios
        .get("/getproducts", {
          params: {
            keyword: this.input2
          }
        })
        .then(result => {
          //   console.log(result);
          this.pruducthot = result.data;
        });
    },
    toProductDetails(itemid){
      this.$router.push({path :"/productDetails",
      query:{
        id:itemid
      }
      }, )
     
      
    },

  },

  created() {
    this.axios.get("/getproducts").then(result => {
      console.log(result);
      this.pruducthot = result.data;
    });
  }
};
</script>

<style scoped>
.el-header{
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
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

.el-main {
  /* background-color: #e9eef3; */
  /* color: #333; */
  text-align: center;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
  background-color: #fff;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.toubu {
  display: flex;
}
.toubu div {
  margin: 0 80px;
}
/* 轮播图部分 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 480px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/*  */

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
    background: #99a9bf;
  } */
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.hot {
  width: 1100px;
  margin: 0 auto;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-product {
  border: 1px solid gray;
  /* margin-right: 20px; */
}
.img_pr {
  background-color: gainsboro;
}
</style>