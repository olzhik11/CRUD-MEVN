import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/MainPage'),
  },
  {
    path: '/posts/:id',
    name: 'PostId',
    component: () => import('@/views/PostPage'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/posts/edit/:id',
    name: 'Edit',
    component: () => import('@/views/PostEditPage'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/register',
    name: 'Register',
    component: () => import('@/views/RegisterPage')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('@/views/LoginPage')
  },
  {
    path: '/user/protected',
    name: 'Protected',
    component: () => import('@/views/ProtectedRoute'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/posts/searchPosts',
    name: 'SearchPosts',
    component: () => import('@/views/SearchPostsPage'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/user/:username',
    name: 'UserProfile',
    component: () => import('@/views/UserProfilePage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.state.users.isAuth) {
        next()
      } else {
        alert('Please log in.')
      }
    } else{
      next()
    }
})
export default router
