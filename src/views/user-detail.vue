<template>
  <div class="user-detail">
    <div class="d-flex justify-content-center align-items-center pt-4">
      <div class="user-card col-11 col-sm-8 col-md-6 col-lg-5">
        <div class="p-2 d-flex justify-content-center">
          <div class="text-center col-12 col-sm-10">
            <img :src="user.picture.large" class="user-pic" alt="user picture">
            <h4 class="py-2">{{ user.name.first }} {{ user.name.last }}</h4>
            <table class="table text-start">
              <tbody>
                <tr>
                  <th scope="row">gender</th>
                  <td>{{ user.gender }}</td>
                </tr>
                <tr>
                  <th scope="row">age</th>
                  <td>{{ user.dob.age }}</td>
                </tr>
                <tr>
                  <th scope="row">country</th>
                  <td>{{ user.location.country }}</td>
                </tr>
                <tr>
                  <th scope="row">state</th>
                  <td>{{ user.location.state }}</td>
                </tr>
                <tr>
                  <th scope="row">city</th>
                  <td>{{ user.location.city }}</td>
                </tr>
                <tr>
                  <th scope="row">email</th>
                  <td>{{ user.email }}</td>
                </tr>
              </tbody>
            </table>
            <div class="pb-1">
              <button class="btn btn-primary"><i class="far fa-envelope"></i> Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    }
  },
  // computed: {
  //   user() {
  //     return this.$store.getters.getUserById(this.$route.params.id);
  //   }
  // }
  created() {
    this.userData = this.$store.getters.getUserById(this.$route.params.id);
  },
  computed: {
    user() {
      return this.userData.value;
    }
  }
}
</script>

<style scoped>
.user-card {
  border-radius: 5px;
  box-shadow: 3px 3px 5px;
}

.user-pic {
  border-radius: 50%;
}
</style>