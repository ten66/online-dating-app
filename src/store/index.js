import { createStore } from 'vuex'
import users from './users'
import messages from './messages'

export default createStore({
  modules: {
    users: users,
    messages: messages,
  }
})
