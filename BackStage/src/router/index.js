import Vue from 'vue'
import VueRouter from 'vue-router'

import Backstage from '../views/Backstage.vue'
import AddMusic from '../components/AddMusic.vue'
import changeMusic from '../components/changeMusic.vue'

import register from "../components/register.vue";
import login from "../components/login.vue"

Vue.use(VueRouter)

const routes = [
  
   
  {
    path: '/Backstage',
    name: 'Backstage',
    component: Backstage
  },
  // 添加商品
  {
    path: '/AddMusic',
    name: 'AddMusic',
    component: AddMusic
  },
  // 修改商品
  {
    path: '/changeMusic',
    name: 'changeMusic',
    component: changeMusic
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'hash'
  // mode: 'history'
})

// 全局导航守卫
// router.beforeEach(function (to, from, next) {
//   console.log(to, from)
//   if (to.path == "/musicPage") {
//     if (localStorage.getItem("loginStatus")) {
//       next()
//     } else {
//       next("/my");
//     }
//   } else {
//     next()
//   }
// })
export default router
