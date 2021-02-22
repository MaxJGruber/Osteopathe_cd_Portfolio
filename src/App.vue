<template>
  <router-view>
    <Home />
  </router-view>
</template>

<script>
import Home from "../src/views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
</style>
