<template>
  <div>
    <h2>购物车</h2>
    <hr />
    <div class="container" id="app">
      <div class="panel ">
        <table class="table " v-if="list.length != 0">
          <tr>
            <th>ID</th>
            <th>商品图片</th>
            <th>商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>

          <tr v-for="(item,index) in list" :key="index">
            <td>{{index+1}}</td>
            <td>
              <img :src="item.img" alt />
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price}}元</td>

            <td>
              <div class="input-group">
                <span class="input-group-addon" @click="sub(index)">-</span>
                <input type="text" v-model="item.count" class="form-control" />
                <span class="input-group-addon" @click="add(index)">+</span>
              </div>
            </td>
            <td>{{item.count * item.price}}元</td>
            <td>
              <button
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#layer"
                @click="bu1(nowIndex=index)"
              >删除</button>
            </td>
          </tr>
          <tr>
            <td>总购买价格:</td>
            <td colspan="5">{{totalPrice}}元</td>
            <td>
              <button
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#layer"
                @click="bu1(nowIndex=-2)"
              >清空购物车</button>
            </td>
          </tr>
        </table>
        <div class="alert alert-warning" v-if="list.length == 0">您的购物车没有东西了，您开心吗</div>
      </div>

      <div role="dialog" class="tishikuan" id="layer" v-if="layer>0">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
              <h2>温馨提示😆</h2>
              <h3 class="modal-title" v-if="nowIndex < 0">`您确定要删除'全部商品'吗？`</h3>
              <h3 class="modal-title" v-else>`您确定要删除商品:{{list[nowIndex].name}}吗？`</h3>
            </div>
            <div class="modal-body text-right">
              <button class="btn btn-primary btn-sm" data-dismiss="modal" @click="quxiao">取消</button>
              <button
                class="btn btn-danger btn-sm"
                data-dismiss="modal"
                @click="removeM(nowIndex)"
              >确认</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      num: 1,
      list: this.$store.getters.comingcar,
      totalPrice: 0,
      nowIndex: -10,
      
      message: "",
      layer: -1
    };
  },
  created() {
    this.clac();
  },

  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleChange(value) {
      console.log(value);
      //   console.log(this.list)
    },

    // 网
    bu1(a) {
      this.layer = 1;
      // console.log(a);
    },
    quxiao() {
      this.layer = 0;
    },
    removeM(index_p) {
      this.layer = 0;
      if (index_p < 0) {
        // this.list.splice(0, this.list.length);
        // console.log(this.list);
        this.$store.commit("removeall")
        // this.list = [];
      } else {
        // console.log(this.list);
        // console.log(index_p);
        var goodsinfo ={id:this.list[index_p].id, index:index_p};
        this.$store.commit("removeone",goodsinfo)
        // this.list.splice(index_p, 1);
      }
      this.clac();
    },
    add: function(index_p) {
      // this.list[index_p].count++;
      var goodsinfo ={id:this.list[index_p].id, count:1};
      this.$store.commit("addtocar",goodsinfo)
      this.clac();
    },
    sub: function(index_p) {
      if (this.list[index_p].count >= 1) {
        // this.list[index_p].count--;
         var goodsinfo ={id:this.list[index_p].id, count:1};
         this.$store.commit("jiancar",goodsinfo)
        this.clac();
      } else {
        if (confirm("您确定删除这件商品吗?")) {
          var goodsinfo ={id:this.list[index_p].id, index:index_p};
        this.$store.commit("removeone",goodsinfo)
          // this.list.splice(index_p, 1);
        }
      }
    },
    clac: function() {
      this.totalPrice = 0;
      var count = this.list.length;
      for (var i = 0; i < count; i++) {
        this.totalPrice += this.list[i].price * this.list[i].count;
      }
    }
  }
};
</script>

<style>
.tishikuan {
  background-color: gray;
   position: fixed; 
  z-index: 1000;
  top: 100px ;
 right: 700px;
}
.panel{
  width: 80%;
  margin: 0 auto;
  /* background-color: red; */
}
.table{
  width: 100%;
  border: 1px solid red;
  background-color:gainsboro;
}
.table tr ,.table td {
  border: 1px solid red;


}
.table tr{
  height:80px;
}
.table tr img{
  height: 120px;
  width: 120px;
}
.table tr button{
  background-color: red;
  color: white;
  height: 30px;
  width: 80px;
  border: 1px solid greenyellow
}
.form-control{
  text-align: center;
  width: 100px;
}
</style>