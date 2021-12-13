import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/id',
    name: 'UserDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue')
  },
  {
    path: '/user/id/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/chat.vue')
  },
  {
    path: '/message-list',
    name: 'MessageList',
    component: () => import(/* webpackChunkName: "about" */ '../views/message-list.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
