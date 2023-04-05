import { defineStore } from 'pinia'
import axios from "axios"

export const useAppStore = defineStore('app', {
  state: () => ({
    baseUrl: "http://localhost:3000"
  }),
  getters: {},
  actions: {
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
    }
  },
})
