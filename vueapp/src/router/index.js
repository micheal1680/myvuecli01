import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'
import mymain from "../components/mymain.vue"
import setting from "../components/setting.vue"
import out from "../components/out.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/my',
    name: 'mymusic',
    component: () => import('../views/mymusic.vue')
  },
  {
    path:'/info',
    name:'info',
    component: Info,
    // children:[
    //   {
    //     path: 'mymain',
    //     component: mymain,
    //   },
    //   {
    //     path: 'setting',
    //     component: setting
    //   },
    //   {
    //     path: 'out',
    //     component: out
    //   }
    // ]
 }
]

const router = new VueRouter({
  routes,
  mode:'hash'
})

export default router
