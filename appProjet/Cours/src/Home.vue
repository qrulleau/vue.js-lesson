<template>
  <div>
    <app-servers-status v-for="server in 5"></app-servers-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";

export default {
  components: {
    "app-servers-status": ServerStatus
  }
};
</script>

<style>
</style>