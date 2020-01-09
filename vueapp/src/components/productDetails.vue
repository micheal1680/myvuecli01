<template>
  <div class="kuang">
    <div v-if="prodet1.length!=0">
      <h2>{{prodet1[0].name}}</h2>
    </div>
    <hr style="margin:15px 0" />
    <div class="pro">
      <div class="box">
        <div class="datu">
          <img :src="datu" alt />
        </div>
        <div v-for="(item,index) in prodet" :key="index" class="boximg">
          <div
            v-for="(item1,index) in item"
            :key="index=item1"
            class="boximg1"
            @click="selectid(index)"
          >
            <img :src="item1" alt />
          </div>

          <!-- <img :src="item" alt=""> -->
        </div>
      </div>
      <div class="right">
        <div v-if="prodet1.length!=0">
          <h2>{{prodet1[0].name}}</h2>
        </div>
        <div v-if="prodet1.length!=0" style="color:#D33A31" class="font">￥{{prodet1[0].newprice}}</div>
        <div>
          促销：
          <el-dropdown>
            <span class="el-dropdown-link">
              30元 年货节神券， 无门槛
              <span>领券</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>包邮券，数码全场通用，无门槛</el-dropdown-item>
              <el-dropdown-item>20元，数码全场通用，满99元可用</el-dropdown-item>
              <el-dropdown-item>40元，数码全场通用，满199元可用</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          颜色：
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">黑色</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">红色</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">粉色</div>
            </el-col>
          </el-row>
        </div>
        <div>
          数量：
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
            style="width:150px "
          ></el-input-number>
        </div>
        <div style="display:flex ">
          服务：
          <ul style="display:flex ">
            <li style="margin-right:10px">7天无理由退换</li>
            <li>满119包邮</li>
            <li>网易自营</li>
          </ul>
        </div>
        <div>
          <button class="button1" @click="buy">立即购买</button>
          <button class="button2" @click="tocar">加入购物车</button>
          <div>{{this.$store.getters.getallcount}}</div>
        </div>
      </div>
    </div>
    <div>
      <h2>商品详情</h2>
      <hr style="margin:15px 0" />
      <div>
        <span>
          正品低价 品质保证
          该产品一经拆封，非质量问题不接受7天无理由退换货。由于产品与皮肤接触，请您确认需求后再拆封使用。
        </span>
        <div v-for="(item,index) in description" :key="index">
          <div v-for="(item1,index) in item" :key="index">
            <img :src="item1" alt />
          </div>

          <!-- <img :src="item" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodet: [],
      prodet1: [],
      description: [],
      num: 1,
      datu: ""
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    selectid(a) {
      this.datu = a;
      //  console.log(this.prodet[0].img1)
      //  console.log(this.datu)
    },
    tocar() {
      // console.log("1111")
      var goodsinfo = {
        id: this.prodet1[0].id,
        count: this.num,
        name: this.prodet1[0].name,
        price: this.prodet1[0].newprice,
        img: this.prodet1[0].picture_url,
        selected: true
      };
      this.$store.commit("addtocar", goodsinfo);
    },
    buy() {
      alert(
        
        <html>
          <div>
            <h2>购买</h2>
          </div>
        </html>
      );
    }
  },
  created() {
    let id = this.$route.query.id;
    this.axios
      .get("/productDetails", {
        params: {
          id: id
        }
      })
      .then(result => {
        // console.log(4444)
        // console.log("_________")
        // console.log(result)
        this.prodet = result.data.data;
        // console.log(this.prodet)
        this.datu = this.prodet[0].img1;
        this.prodet1 = result.data.result;
        // console.log(this.prodet1);
        this.description = result.data.description;
      });
  }
};
</script>

<style  scoped="scoped">
.datu img {
  width: 100%;
  height: 100%;
}
.button1,
.button2 {
  border: 2px solid #d33a31;
  color: #d33a31;
  width: 165px;
  height: 50px;
  background-color: #fff;
  font-size: 18px;
  margin-right: 20px;
  margin-top: 20px;
}
.el-row {
  margin-bottom: 10px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #ffffff;
  border: 1px solid gray;
}
.row-bg {
  padding: 2px 0;
  /* background-color: #f9fafc; */
}
.font {
  font-size: 30px;
}
.el-dropdown-link {
  cursor: pointer;
  /* color: #409eff; */
  width: 480px;
  height: 50px;
  background-color: #fdf5f4;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.pro {
  display: flex;
}
.right {
  width: 580px;
  /* background-color: aqua; */
  margin-left: 119px;
  text-align: left;
}
.right > div {
  margin-bottom: 10px;
}
.kuang {
  width: 1100px;
  margin: 0 auto;
  /* background-color: green; */
}
.box {
  width: 400px;
  height: 400px;
  /* background-color: red; */

  /* display: flex */
}
.datu {
  width: 400px;
  height: 320px;
  background-color: #f9f9f9;
}
.boximg {
  display: flex;
  /* flex-wrap: wrap; */
  margin-right: 20px;
  /* flex-shrink: 0; */
  /* overflow: hidden; */
  overflow-x: auto;
}
.boximg1 {
  background-color: #f9f9f9;
  margin-right: 5px;
}
</style>