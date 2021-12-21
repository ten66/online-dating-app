
const messages = {
  state: {
    messages: [],
  },
  getters: {
    getMessagesById:(state) => (id) => {
      return state.messages.find(message => message.id === id);
    }
  },
  mutations: {
    setMessages(state, { id, message}) {
      const messages = state.messages.find(message => message.id === id);
      if(!messages) {
        state.messages.push({
          id: id,
          messages: [message],
        })
      } else {
        messages.messages.push(message);
      }
    }
  },
}

export default messages;