<template>
  <div class="home">
    <div class="lunbo">
      <div class="lunbotu">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item,index) in lunbotuArr" :key="index">
            <img :src="item.src" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="download">
        <el-row>
          <el-button type="primary">主要按钮</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import lunbotu1 from "../assets/Home-images/lunbotu/01.jpg";
import lunbotu2 from "../assets/Home-images/lunbotu/02.jpg";
import lunbotu3 from "../assets/Home-images/lunbotu/03.jpg";
import lunbotu4 from "../assets/Home-images/lunbotu/04.jpg";
import lunbotu5 from "../assets/Home-images/lunbotu/05.jpg";
import lunbotu6 from "../assets/Home-images/lunbotu/06.jpg";
import lunbotu7 from "../assets/Home-images/lunbotu/07.jpg";
import lunbotu8 from "../assets/Home-images/lunbotu/08.jpg";
export default {
  name: "home",
  data:function(){
    return {
      lunbotuArr: [
        {src:lunbotu1},
        {src:lunbotu2},
        {src:lunbotu3},
        {src:lunbotu4},
        {src:lunbotu5},
        {src:lunbotu6},
        {src:lunbotu7},
        {src:lunbotu8}
      ]
    }
  }
};
</script>

<style scoped>
.lunbo{
  width: 100%;
  height: 285px;
  position: relative;
}
.el-carousel__item{
  height: 283.88px;
}
.el-carousel__item img{
  width: 730px;
  height: 283.88px;
  position: absolute;
  top: 0;
  left: 186px;
}

.download{
  width: 254px;
  height: 285px;
  background-color: #475669;
  position: absolute;
  top: 0;
  right: 180px;
  z-index: 99;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>