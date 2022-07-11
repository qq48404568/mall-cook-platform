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
    component: () => import('@/pages/login')
  },
  {
    path: '/managet',
    name: 'managet',
    component: () => import('@/pages/managet')
  },
  {
    path: '/mall',
    name: 'mall',
    component: () => import('@/pages/mall'),
    redirect: '/mall/pages-manage',
    children: [
      {
        path: 'pages-manage',
        name: 'pages-manage',
        component: () => import('@/pages/mall/pages-manage')
      },
      {
        path: 'page-build',
        name: 'page-build',
        component: () => import('@/pages/mall/page-build')
      },
      {
        path: 'goods-manager',
        name: 'goods-manager',
        component: () => import('@/pages/mall/goods/goods-manager/index')
      },
      {
        path: 'goods-edit',
        name: 'goods-edit',
        component: () => import('@/pages/mall/goods/goods-manager/edit')
      },
      {
        path: 'group-manager',
        name: 'group-manager',
        component: () => import('@/pages/mall/goods/group-manager/index')
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router