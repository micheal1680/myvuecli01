import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'

import mymain from "../components/mymain.vue"
import setting from "../components/setting.vue"
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
import list from "../components/list.vue";


import productDetails from "../components/productDetails.vue"

import favorite from "../components/favorite.vue";

import downloadclient from "../views/downloadclient.vue";
import shopcar from "../components/shopcar.vue"
import singleSong from "../components/singleSong.vue"


Vue.use(VueRouter)

const routes = [
  {
    path:"/shopcar",
    component:shopcar
  },
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
    path: '/singlesong',
    name: "singlesong",
    component: singleSong
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
    children: [
      {
        path: 'favorite',
        component: favorite,
      },
      {
        path: 'list',
        component: list
      },
    ],
    beforeEach(to, from, next) {
      if (localStorage.getItem("loginStatus")) {
        next()
      } else {
        next("/my")
      }
    },
    meta: {
      keeplive: false
    }
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
    component: setting,
    meta: {
      keepAlive: true,
      firstEnter: true
    },
    beforeEnter(to, from, next) {
      if (from.path == "/") {
        if (to.meta.firstEnter) {
          to.meta.keepAlive = true
          to.meta.keepAlive == false
        } else {
          to.meta.keepAlive = false
        }
      } else {
        to.meta.keepAlive = true
      }
      next();
    }
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
    component: product,

  },
  {
    path: "/productDetails",
    component: productDetails
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
  // mode: 'history'
})

// 全局导航守卫
router.beforeEach(function (to, from, next) {
  console.log(to, from)
  if (to.path == "/musicPage") {
    if (localStorage.getItem("loginStatus")) {
      next()
    } else {
      next("/my");
    }
  } else {
    next()
  }
})
export default router
