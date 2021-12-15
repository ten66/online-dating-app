<template>
  <div id="home" class="p-2">
    <h3>Now online user list!</h3>
    <div class="d-flex justify-content-center flex-wrap">
      <user-card
      v-for="user in users"
      :user="user"
      :key="user.login.uuid" />
    </div>
  </div>
</template>

<script>
import UserCard from "../components/user-card.vue"

export default {
  name: "home",
  components: {
    UserCard,
  },
  computed : {
    users(){
      return this.$store.state.users.users.results;
    }
  },
  created(){
    this.$store.dispatch('getUsers')
  }
}
</script>


