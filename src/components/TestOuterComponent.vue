<template>
  <test-inner-component v-model="markup"></test-inner-component>
</template>

<script>
import TestInnerComponent from "@/components/TestInnerComponent";
export default {
  name: "TestOuterComponent",
  components: { TestInnerComponent },
  data() {
    return {
      markup: "asdf",
    };
  },
  // watch: {
  //   markup() {
  //     this.$emit("input", "Something else!");
  //   },
  // },
};
</script>
