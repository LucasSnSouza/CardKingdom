import { createRouter, createWebHistory } from 'vue-router'

import Splashscreen from '@/views/Splashscreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Splashscreen
    },
  ]
})

export default router
