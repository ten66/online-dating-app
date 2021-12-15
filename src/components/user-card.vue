<template>
  <div class="card text-center p-1 m-1 shadow " style="width: 16rem;">
    <img :src="user.picture.large" class="card-img-top user-img" alt="User's Photo">
    <div class="card-body">
      <h6 class="card-title">{{ user.name.first }} {{ user.name.last }}</h6>
      <p class="card-text"><i class="fas fa-map-marker-alt"></i> {{ user.location.country }},{{ user.location.city }}</p>
      <div class="d-flex justify-content-center align-items-center">
        <div class="pe-1">
          <button class="btn btn-primary"><i class="far fa-envelope"></i> Message</button>
        </div>
        <div class="ps-1">
          <button class="btn btn-outline-primary"><i class="fas fa-user"></i> Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  }
}
</script>

<style scoped>
.user-img {
  border-radius: 50%;
}
</style>