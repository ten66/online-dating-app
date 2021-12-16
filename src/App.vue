<template>
  <div class="p-2">
    <h1 class="m-0">Online Dating App</h1>
  </div>
  <div id="nav" class="p-2">
    <router-link to="/">Home</router-link> |
    <router-link to="/message-list">MessageList</router-link>
  </div>
  <router-view />
</template>

<script>
// export default {
//   name: "app",
//   computed : {
//     users : function(){
//       return this.$store.state.users.users.results;
//     }
//   },
//   mounted(){
//     this.$store.dispatch('getUsers')
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* 
#nav {

} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
