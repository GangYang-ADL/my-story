import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'about',
    path: '/about',
    component: () => import('@/pages/About/About.vue'),
  },
  {
    name: 'experiences',
    path: '/experiences',
    component: () => import('@/pages/Experiences/Experiences.vue'),
  },
  {
    name: 'projects',
    path: '/projects',
    component: () => import('@/pages/Projects/Projects.vue'),
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
    // Redirect to about me page if route not matched
    path: '/:pathMatch(.*)*',
    redirect: () => {
      return { name: 'about' }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
