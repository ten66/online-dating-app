<template>
  <div class="MessageList">
    <div class="col-12">
      <div>
        <button class="btn btn-primary" @click="getMessages">確認用</button>
      </div>
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
    this.messageList = this.$store.state.messages.messages;
  },
  methods: {
    getMessages() {
      console.log(this.messageList);
    }
  }
}
</script>

