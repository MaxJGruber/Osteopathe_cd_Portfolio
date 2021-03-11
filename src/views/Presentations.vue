<template>
  <div>
    <ExtendedNavbar />
    <div class="presentation-pic-cover"></div>
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar.vue";
import Footer from "../components/Footer";

export default {
  components: {
    ExtendedNavbar,
    Footer,
  },
};
</script>

<style>
.presentation-pic-cover {
  background-image: url("../assets/photo-gallery/shooting12.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>