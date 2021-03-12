<template>
  <div>
    <ExtendedNavbar />
    <div class="presentation-pic-cover"></div>
    <AttentionTab :message="message1" />
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar.vue";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";

export default {
  components: {
    ExtendedNavbar,
    AttentionTab,
    Footer,
  },
  data: () => {
    return {
      message1: {
        long: "En cas d'urgence, veuillez appeler le 15.",
        short: "En cas d'urgence, applez le 15.",
      },
    };
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