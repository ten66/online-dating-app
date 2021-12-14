<template>
  <div id="app">
    <h1>{{ $store.state.message }}</h1>
    <h2>{{ $store.state.users.message }}</h2>
    <p>{{ users }}</p>
  </div>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/message-list">MessageList</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "app",
  computed : {
    users : function(){
      console.log(this.$store.state.users.users)
      return this.$store.state.users.users;
    }
  },
  mounted(){
    this.$store.dispatch('getUsers')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

 
{ 
  "results": [ 
    { 
      "gender": "male", 
      "name": { "title": "Mr", "first": "Tyler", "last": "Wang" }, 
      "location": { 
        "street": { "number": 6331, "name": "Bairds Road" }, 
        "city": "Masterton", 
        "state": "Otago", 
        "country": "New Zealand", 
        "postcode": 55009, 
        "coordinates": { "latitude": "63.2585", "longitude": "-98.5647" }, 
        "timezone": { "offset": "-9:00", "description": "Alaska" } 
      }, 
      "email": "tyler.wang@example.com", "login": { "uuid": "fd1a0698-650f-4c6f-a406-ddf6ef6e923e", "username": "angrygoose861", "password": "dance", "salt": "Avd7Vy04", "md5": "d62e7740bd27e411b383e31957f3c0c1", "sha1": "28de027099684af02812dffb06d6af6f27989bfa", "sha256": "d72c3018ac4cbca3385fa3d48e08dfcae7760d67fa418d51c2ce52e6c83ce8cc" }, "dob": { "date": "1990-10-28T16:34:16.486Z", "age": 31 }, "registered": { "date": "2019-04-14T08:20:41.600Z", "age": 2 }, "phone": "(894)-951-2912", "cell": "(158)-866-8378", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/39.jpg", "medium": "https://randomuser.me/api/portraits/med/men/39.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg" }, "nat": "NZ" } ], "info": { "seed": "9503c0109afe8db8", "results": 1, "page": 1, "version": "1.3" } }