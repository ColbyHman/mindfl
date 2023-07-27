import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CreateEntry from '../views/CreateEntry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: "/dashboard"},
      component: Dashboard,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'create',
      component: CreateEntry
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
