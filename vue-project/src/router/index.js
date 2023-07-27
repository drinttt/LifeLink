import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/insertcard',
      name: 'insertcard',
      component: () => import('../views/InsertCard.vue')
    },
    {
      path: '/scanQrcode',
      name: 'scanQrcode',
      component: () => import('../views/ScanQrcode.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/registerDetail',
      name: 'registerDetail',
      component: () => import('../views/RegisterDetail.vue')
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: () => import('../views/AuthenticateView.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('../views/AppointmentView.vue')
    },
  ]
})

export default router
