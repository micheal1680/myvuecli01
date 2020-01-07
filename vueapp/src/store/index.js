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
    comingcar(sate){
      
      return sate.car;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
