import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PasswordCheckerView from "../views/PasswordCheckerView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/tools/password-checker',
      name: 'password-checker',
      component: PasswordCheckerView
    },
    {
      path: '/tools/idx-assets-tracker',
      name: 'idx-assets-tracker',
      component: HomeView
    },
  ]
})

export default router
