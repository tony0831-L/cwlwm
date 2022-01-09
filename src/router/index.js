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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
