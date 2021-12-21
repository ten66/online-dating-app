<template>
  <div class="MessageList">
    <div class="col-12">
      <router-link
      v-for="message in messageList"
      :key="message.id"
      :message="message"
      :to="{ name: 'Chat', params: {id: message.id }}">
        <div class="d-flex flex-row align-items-center border-top">
          <div class="col-3 col-sm-1 user-card p-1 d-flex align-items-center">
            <img :src="message.data.picture.large" class="user-pic" alt="user picture">
          </div>
          <div class="col-9 col-sm-11 p-1 text-dark">
            <p class="mb-0">{{ message.data.name.first }} {{ message.data.name.last }}</p>
            <p class="mb-0 last-message">{{ lastMessage(message.messages) }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      messageList: [],
    }
  },
  created() {
    const messages = this.$store.state.messages.messages;
    if(!messages.length) return;
    for(let i = 0; i < messages.length; i++) {
      this.messageList.push({
        id: messages[i].id,
        messages: messages[i].messages,
        data: this.$store.getters.getUserById(messages[i].id).value,
      })
    }
  },
  computed: {
    lastMessage: () => (messages) => messages[messages.length-1].substring(0,messages[messages.length-1].indexOf(" ")),
  },
}
</script>

<style scoped>
.user-card {
  height: 8rem;
}

.user-pic {
  width: 100%;
  border-radius: 50%;
}

.last-message {
  font-size: .8rem;
}
</style>
