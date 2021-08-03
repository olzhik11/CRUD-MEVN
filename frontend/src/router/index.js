import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Main')
  },
  {
    path: '/posts/:id',
    name: 'PostId',
    component: () => import('@/views/PostPage')
  },
  {
    path: '/posts/edit/:id',
    name: 'Edit',
    component: () => import('@/views/EditPost')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
