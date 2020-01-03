import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'
import mymain from "../components/mymain.vue"
import setting from "../components/setting.vue"
import out from "../components/out.vue"
import register from "../components/register.vue";
import login from "../components/login.vue"
import product from '../views/product.vue'
// 牛---添加的音乐分类子组件
import playlist from "../views/playlist.vue"
import chineseMusic from "../components/musicType/chinese.vue";
import popularMusic from "../components/musicType/popular.vue";
import rockMusic from "../components/musicType/rock.vue";
import balladMusic from "../components/musicType/ballad.vue";
import electronicMusic from "../components/musicType/electronic.vue";
import moreMusic from "../components/musicType/more.vue";
import list from  "../components/list.vue";
import favorite from "../components/favorite.vue";

import downloadclient from "../views/downloadclient.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: playlist,
    children: [
      {
        path: 'chinese',
        component: chineseMusic
      },
      {
        path: 'popular',
        component: popularMusic
      },
      {
        path: 'rock',
        component: rockMusic
      },
      {
        path: 'ballad',
        component: balladMusic
      },
      {
        path: 'electronic',
        component: electronicMusic
      },
      {
        path: 'more',
        component: moreMusic
      }
    ]
  },  
  {
    path: '/downloadclient',
    component: downloadclient
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
        path: 'favorite',
        component: favorite
      },
      {
        path: 'list',
        component: list
      },
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
  },
  {
    path: '/product',
    component: product
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
  // mode: 'history'
})

// 全局导航守卫
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path=="/my"){
    if(localStorage.getItem("loginStatus")){
      next()
    }else{
      next("/login");
    }
  }else{
    next()
  }
})
export default router
