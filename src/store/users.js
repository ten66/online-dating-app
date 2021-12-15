import axios from "axios";

const users = {
  state: {
    users: [],
  },
  getters: {
    getUserById(id) {
      return id;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    getUsers({commit}){
      return axios.get('https://randomuser.me/api/?results=30')
          .then(response => {
            commit('setUsers',response.data)
          })
    }
  },
}

export default users;