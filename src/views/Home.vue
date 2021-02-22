<template>
  <div id="app">
    <LandingPage />
    <Featured />
    <ContactInfo />
    <Hook />
    <!-- <Carousel /> -->
    <!-- <ContactForm /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
// import Carousel from "./components/Carousel";
import ContactInfo from "../components/ContactInfo";
import Hook from "../components/Hook";
import Featured from "../components/Featured.vue";
// import Footer from "./components/Footer";

export default {
  name: "Home",
  components: {
    LandingPage,
    // Carousel,
    Hook,
    ContactInfo,
    Featured,
    // Footer,
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
