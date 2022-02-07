<template>
  <div class="container mt-5">
    <home></home>
  </div>
</template>

<script>
import Home from './Home.vue';

export default {
  name: "TodoApp",
  components: {
    Home,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
