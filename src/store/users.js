import axios from "axios";

const users = {
  state: {
    users: [],
    selectedData: [],
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === id);
    },
  },
  mutations: {
    setUsers(state, users) {
      const userData = users.results;
      for(let i = 0; i < userData.length; i++) {
        let userId = userData[i].login.uuid;
        state.users.push({ 
          id: userId,
          value: userData[i],
         });
      }
    }
  },
  actions: {
    fetchUsers(context){
      return axios.get('https://randomuser.me/api/?results=30')
          .then(response=>context.commit('setUsers',response.data))
    }
  },
}

export default users;