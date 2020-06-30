<template>
  <div>
    <!-- <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <div>
      <slot name="content"></slot>
      <slot></slot>
    </div>-->
    <h3>New quote</h3>
    <button @click="counter ++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("destroys");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
};
</script>

<style scoped>
</style>