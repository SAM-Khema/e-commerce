import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //create route to navigate page to show when user click

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/guest.vue')
    },
    {
      path: '/specialoffer',
      name: 'specialoffer',
      component: () => import('../views/SpecialOffer.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/Contactus.vue')
    },
    {
      path: '/register',
      name: 'auth/register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/login',
      name: 'auth/login',
      component: () => import('../views/login.vue')
    },
    
  ]
})


export default router
