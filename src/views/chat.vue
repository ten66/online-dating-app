<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-11 col-sm-8 shadow">

      <div
      v-for="message in messageList"
      :key="message"
      :message="message">
      <!-- 自分の送信メッセージ -->
        <div class="d-flex flex-row-reverse align-items-center text-end p-2">
          <div class="col-1">
            <img src="../assets/user-pic.png" class="user-pic" alt="user picture">
          </div>
          <div class="p-1">
            <p class="mb-0">{{ message }}</p>
            <p class="mb-0 date">{{ nowDate }}</p>
          </div>
        </div>

        <!-- 相手の送信メッセージ -->
        <div class="d-flex flex-row align-items-center p-2">
          <div class="col-1">
            <img :src="userPic" class="user-pic" alt="user picture">
          </div>
          <div class="p-1">
            <p class="mb-0">hello</p>
            <p class="mb-0 date">{{ nowDate }}</p>
          </div>
        </div>
      </div>

      <div class="p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Send Message" aria-label="Send Message" aria-describedby="message-btn" v-model="sendMessage">
          <button class="btn btn-outline-secondary" type="button" id="message-btn" @click="sendMessages">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sendMessage: "",
      messages: [],
      userPic: "",
    }
  },
  created() {
    const userData = this.$store.getters.getUserById(this.$route.params.id);
    this.userPic = userData.value.picture.large;
    this.messages = this.$store.getters.getMessagesById(this.$route.params.id);
  },
  computed: {
    nowDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth()+1;
      const date = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();

      return `${year}/${month}/${date} ${hour}:${min}:${sec}`
    },
    messageList() {
      return this.messages;
    }
  },
  methods: {
    sendMessages() {
      if(!this.sendMessage) return;
      this.$store.commit("setMessages", {id: this.$route.params.id, message: this.sendMessage});
      this.sendMessage = "";
      this.messages = this.$store.getters.getMessagesById(this.$route.params.id);
    }
  }
}
</script>

<style scoped>
.user-pic {
  width: 100%;
  border-radius: 50%;
}

.date {
  font-size: .7rem;
}
</style>