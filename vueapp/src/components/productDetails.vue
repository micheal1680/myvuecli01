<template>
  <div class="kuang">
      
      <div class="pro">
    
    <div class="box">
        <div class="datu"></div>
      <div v-for="(item,index) in prodet" :key="index" class="boximg">
        <div v-for="(item1,index) in item" :key="index">
          <img :src="item1" alt />
        </div>

        <!-- <img :src="item" alt=""> -->
      </div>
    </div>
    <div class="right">右边信息
        <div v-if="prodet1.length!=0">{{prodet1[0].name}}</div>
        <div v-if="prodet1.length!=0">￥{{prodet1[0].newprice}}</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodet: [],
      prodet1: []
    };
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
        // console.log(result)
        // console.log("_________")
        // console.log(result)
        this.prodet = result.data.data;
        this.prodet1 = result.data.result;
      });
  }
};
</script>

<style scoped>
.pro{
display: flex;
}
.right{
    width: 580px;
    background-color: aqua;
    margin-left: 119px;
}
.kuang{
    width: 1100px;
    margin: 0 auto;
    /* background-color: green; */
}
.box{
    width: 400px;
    height: 400px;
    background-color:red;
    
    /* display: flex */
}
.datu{
     width: 400px;
      height: 320px;
      background-color:gray;
}
.boximg{
    display: flex;
    /* flex-wrap: wrap; */
    margin-right: 20px;
    /* flex-shrink: 0; */
    /* overflow: hidden; */
    overflow-x: auto

}
</style>