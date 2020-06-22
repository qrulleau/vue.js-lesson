<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "normal";
    }
  }
};
</script>

<style>
</style>