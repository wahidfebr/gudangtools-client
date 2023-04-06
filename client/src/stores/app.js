import { defineStore } from 'pinia'
import axios from "axios"
import { SHA1 } from 'crypto-js'

export const useAppStore = defineStore('app', {
  state: () => ({
    baseUrl: "http://localhost:3000",
    passwordCheckerResult: {
      status: "",
      message: "",
    },
    isLogin: false,
  }),
  getters: {},
  actions: {
    checkToken() {
      if (localStorage.access_token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },

    async loginHandler(value) {
      try {
        const { email, password } = value
        const { data } = await axios.post(this.baseUrl + "/auth/login",
          {
            email,
            password
          }
        )
        localStorage.access_token = data.access_token
        localStorage.email = data.email
        this.$router.push({
          name: "home"
        })
      } catch (error) {
        console.log(error);
      }
    },

    async registerHandler(value) {
      try {
        const { email, password } = value
        const { data } = await axios.post(this.baseUrl + "/auth/register",
          {
            email,
            password
          }
        )
        this.$router.push({
          name: "login"
        })
      } catch (error) {
        console.log(error);
      }
    },

    async passwordCheckerHandler(value) {
      try {
        const { password } = value
        if (!password.trim()) return

        const shasum = SHA1(password).toString().toUpperCase()
        const prefix = shasum.slice(0, 5)
        const suffix = shasum.slice(5)
        const { data } = await axios.get(this.baseUrl + "/pwned/password",
          {
            params: {
              prefix
            }
          }
        )
        const index = data.findIndex(el => el.suffix === suffix)
        if (index === -1) {
          this.passwordCheckerResult.status = "safe"
          this.passwordCheckerResult.message = "No data leak found, password is safe"
        } else {
          this.passwordCheckerResult.status = "danger"
          this.passwordCheckerResult.message = `Leak found! this password has been used ${data[index].count} times`
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
})
