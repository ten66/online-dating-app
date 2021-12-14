import { createStore } from 'vuex'
import users from './users.js'

export default createStore({
  state: {
    message: "Hello Vue.js!",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users: users,
  }
})
