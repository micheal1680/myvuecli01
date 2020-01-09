import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var car1 = JSON.parse(localStorage.getItem('car') || '[]');

export default new Vuex.Store({

  state: {
    car: car1,
  },
  mutations: {
    addtocar(state, goodsinfo) {
      var flag = false
      state.car.some((item) => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true
        }
      })
      if (flag == false) {
        // console.log("goodsinfo")
        state.car.push(goodsinfo)
        
      }

      // console.log(state.car)
      localStorage.setItem('car', JSON.stringify(state.car) );
      

    },
    removeall(state){
      // console.log(state.car)
      state.car=[]
      localStorage.setItem('car', JSON.stringify(state.car) );
    },
    removeone(state,goodsinfo){
      state.car.some((item) => {
        if (item.id == goodsinfo.id) {
          state.car.splice(goodsinfo.index, 1);
          console.log(state.car)
          return true
        }
      })

      localStorage.setItem('car', JSON.stringify(state.car) );
    }
    ,
    jiancar(state,goodsinfo){
      // console.log(state.car)
      state.car.some((item) => {
        if (item.id == goodsinfo.id) {
          item.count -= parseInt(goodsinfo.count);
          
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car) );
    }


  },
  getters: {
    // 获取所有数量
    getallcount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
       
      })
      return c

    },
    // 获取数据
    comingcar(sate){
      
      return sate.car;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
