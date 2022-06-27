import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>import('@/pages/login')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router