import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form-student',
    name: 'StudentList',
    component: () => import('../views/students/List.vue')
  },
  {
    path: '/form',
    name: 'StudentForm',
    component: () => import('../views/students/FormCreated.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditForm',
    component: () => import('../views/students/Edit.vue')
  },
  {
    path: '/list-detail',
    name: 'List-Detail',
    component: () => import('../views/students/ListDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
