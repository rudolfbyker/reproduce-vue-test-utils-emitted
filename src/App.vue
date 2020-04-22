<template>
  <div id="app">
    <TestOuterComponent/>
  </div>
</template>

<script>
import TestOuterComponent from "./components/TestOuterComponent";
export default {
  name: 'App',
  components: {
    TestOuterComponent
  }
}
</script>
