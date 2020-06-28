<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>Server#{{ server.id }} selected, Status {{ server.status }}</p>
    <br />
    <button @click="resetStatus">Change Normal</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    serverBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
