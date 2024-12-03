import { createRouter, createWebHistory } from 'vue-router'

import ArenaView from '../views/ArenaView.vue';
import CardsListView from '../views/CardsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ArenaView
    },
    {
      path: '/cards-list',
      name: 'Lista de Cartas',
      component: CardsListView
    }
  ]
})

export default router
