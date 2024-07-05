import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/LoginBar.vue'
import Register from '@/views/RegisterBar.vue'
import Home from '@/views/HomeBar.vue'
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login',},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/index', component: Home }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
