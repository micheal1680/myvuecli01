import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'
import mymain from "../components/mymain.vue"
import setting from "../components/setting.vue"
import out from "../components/out.vue"
import register from "../components/register.vue";
import login from "../components/login.vue"
// 牛---添加的音乐分类子组件
import discover from "../views/discover.vue"

import chineseMusic from "../components/musicType/chinese.vue";
import popularMusic from "../components/musicType/popular.vue";
import rockMusic from "../components/musicType/rock.vue";
import balladMusic from "../components/musicType/ballad.vue";
import electronicMusic from "../components/musicType/electronic.vue";
import moreMusic from "../components/musicType/more.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    component: discover
  },
  {
    path: '/chinese',
    component: chineseMusic
  },
  {
    path: '/popular',
    component: popularMusic
  },
  {
    path: '/rock',
    component: rockMusic
  },
  {
    path: '/ballad',
    component: balladMusic
  },
  {
    path: '/electronic',
    component: electronicMusic
  },
  {
    path: '/more',
    component: moreMusic
  },
  {
    path: '/my',
    name: 'mymusic',
    component: () => import('../views/mymusic.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/mymain',
    component: mymain
  },
  {
    path: '/setting',
    component: setting
  },
  {
    path: '/out',
    component: out
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

export default router
