import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'
import mymain from "../components/mymain.vue"
import setting from "../components/setting.vue"
import out from "../components/out.vue"
import register from "../components/register.vue";
import login from "../components/login.vue"
import list from  "../components/list.vue";
import favorite from "../components/favorite.vue"

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
    path: '/musicPage',
    name: 'musicPage',
    component: () => import('../components/musicPage.vue'),
    children:[
      {
        path: '/favorite',
        component: favorite
      },
      {
        path: '/list',
        component: list
      }
    ]

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
})

export default router
