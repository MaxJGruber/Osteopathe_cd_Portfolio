<template>
  <div id="app">
    <LandingPage />
    <Featured />
    <Hook />
    <!-- <Carousel /> -->
    <!-- <ContactForm /> -->
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
// import Carousel from "./components/Carousel";
// import ContactForm from "./components/ContactForm"
import Hook from "./components/Hook";
import Featured from "./components/Featured.vue";

export default {
  name: "App",
  components: {
    LandingPage,
    // Carousel,
    Hook,
    // ContactForm
    Featured,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
