<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID : {{ $route.params.id }}</p>
    <!-- <router-link
      class="btn btn-primary"
      tag="button"
      :to="'/user/' + $route.params.id + '/edit'"
    >Edit User</router-link>-->

    <!-- maniere plus propre de crée un lien  -->
    <router-link class="btn btn-primary" tag="button" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  BeforeRouteEnter(to, from, next) {
    next();
    // next doit absolument etre appelé pour que la méthode marche
  }
};
</script> name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 }