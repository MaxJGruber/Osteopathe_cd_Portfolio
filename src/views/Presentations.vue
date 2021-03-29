<template>
  <div>
    <ExtendedNavbar :page="'presentations'" />
    <div class="presentation-pic-cover"></div>
    <AttentionTab :message="message1" />
    <Disclaimer />
    <hr />
    <AboutRight :segment="osteopathie" />
    <hr />
    <AboutLeft :segment="practioner" />
    <!-- <div class="elfsight-app-20fce0e0-f9ef-427d-bbff-3b4df952898d"></div> -->
    <hr />
    <AboutRight :segment="profession" />
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar.vue";
import Disclaimer from "../components/Disclaimer";
import AboutRight from "../components/About-Right";
import AboutLeft from "../components/About-Left";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";
import {osteopathie} from "../PresentationsFolder/Osteopathie";
import {practioner} from "../PresentationsFolder/Practioner";
import {profession} from "../PresentationsFolder/Profession";

export default {
  components: {
    ExtendedNavbar,
    Disclaimer,
    AboutRight,
    AboutLeft,
    AttentionTab,
    Footer,
  },
  data: () => {
    return {
      message1: {
        long: "En cas d'urgence, veuillez appeler le 15.",
        short: "En cas d'urgence, appelez le 15.",
      },
      osteopathie: osteopathie,
      practioner: practioner,
      profession: profession,
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