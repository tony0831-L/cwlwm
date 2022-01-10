import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue')
  },
  {
    path:'/rest',
    name: 'rest',
    component: () => import( '../views/choose.vue')
  },
  {
    path:'/regi',
    name: 'regi',
    component: () => import( '../views/regi.vue')
  },
  {
    path:'/setting',
    name: 'setting',
    component: () => import( '../views/setting.vue')
  },
  {
    path:'/myRes',
    name: 'myRes',
    component: () => import( '../views/myRestarun.vue')
  },
  {
    path:'/addRes',
    name: 'addRes',
    component: () => import( '../views/addRes.vue')
  },
  {
    path:'/editRes',
    name: 'editRes',
    component: () => import( '../views/editRes.vue')
  },
  {
    path:'/history',
    name: 'history',
    component: () => import( '../views/history.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
