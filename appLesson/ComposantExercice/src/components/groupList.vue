<template>
  <div>
    <ul class="list-group">
      <list-item></list-item>
    </ul>
  </div>
</template>

<script>
import listItem from "./listItem.vue";

export default {
  components: {
    "list-item": listItem
  }
};
</script>