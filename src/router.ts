import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/Home/Home.vue'),
  },
  {
    name: 'experience',
    path: '/experience',
    component: () => import('./pages/Experience/Experience.vue'),
  },
  {
    name: 'skills',
    path: '/skills',
    component: () => import('./pages/Skills/Skills.vue'),
  },
  {
    name: 'life',
    path: '/life',
    component: () => import('./pages/Life/Life.vue'),
  },
  {
    // Redirect to home if route not matched
    path: '/:pathMatch(.*)*',
    redirect: () => {
      return { name: 'home' }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
