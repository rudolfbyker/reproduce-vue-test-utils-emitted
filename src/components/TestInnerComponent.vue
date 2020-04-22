<template>
  <div class="test-inner-component">
    <div v-html="value"></div>
    <button @click="$emit('input', '<em>MAGIC!</em>')">Click me</button>
  </div>
</template>

<script>
export default {
  name: "TestInnerComponent",
  props: {
    value: String,
  },
};
</script>
