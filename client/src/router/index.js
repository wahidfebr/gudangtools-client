import { createRouter, createWebHistory } from 'vue-router'
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'

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
      path: '/logout',
      name: 'logout'
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

router.beforeEach((to, from, next) => {
  const actions = mapActions(useAppStore, ['checkToken'])
  const isAuthenticated = localStorage.access_token;
  if (isAuthenticated && to.name === "login") {
    next({
      name: "home"
    })
  } else if (isAuthenticated && to.name === "register") {
    next({
      name: "home"
    })
  } else if (!isAuthenticated && to.name === "idx-assets-tracker") {
    next({
      name: "login"
    })
  } else if (to.name === "logout") {
    localStorage.clear()
    next({
      name: "home"
    })
  } else {
    next()
  }

  actions.checkToken()
})

export default router
