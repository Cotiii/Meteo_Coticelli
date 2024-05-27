import { createRouter, createWebHistory } from 'vue-router'

import Tabella from '@/views/Tabella.vue'
import Grafico from '@/views/Grafico.vue'

const routes = [
  {
    path: '/Tabella',
    name: 'Tabella',
    component: Tabella
  },
  {
    path: '/Grafico',
    name: 'Grafico',
    component: Grafico
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
