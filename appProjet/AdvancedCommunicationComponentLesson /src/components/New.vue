<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <div>
      <!--<slot name="content"></slot> -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
</style>