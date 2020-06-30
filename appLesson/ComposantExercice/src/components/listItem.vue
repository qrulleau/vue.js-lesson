<template>
  <div>
    <li class="list-group-item" v-for="index in 5" :key="index.id">Server #{{ index }}</li>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>