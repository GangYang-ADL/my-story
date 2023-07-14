import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    name: 'experiences',
    path: '/experiences',
    component: () => import('@/pages/Experiences/Experiences.vue'),
  },
  {
    name: 'skills',
    path: '/skills',
    component: () => import('@/pages/Skills/Skills.vue'),
  },
  {
    name: 'hobbies',
    path: '/hobbies',
    component: () => import('@/pages/Hobbies/Hobbies.vue'),
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
