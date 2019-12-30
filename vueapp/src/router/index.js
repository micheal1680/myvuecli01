import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info.vue'

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
    component: Info 
 }
]

const router = new VueRouter({
  routes,
  mode:'hash'
})

export default router
