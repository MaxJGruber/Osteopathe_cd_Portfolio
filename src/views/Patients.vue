<template>
  <div>
    <ExtendedNavbar :page="'patients'" />
    <div class="patients-pic-cover"></div>
    <AttentionTab :message="message1" />
    <Disclaimer />
    <hr />
    <AboutRight :segment="nourissons" />
    <hr />
    <AboutLeft :segment="enfants" />
    <hr />
    <AboutRight :segment="femmesEnceintes" />
    <hr />
    <AboutLeft :segment="adultes" />
    <hr />
    <AboutRight :segment="seniors" />
    <hr />
    <AboutLeft :segment="sportifs" />
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar";
import Disclaimer from "../components/Disclaimer";
import AboutRight from "../components/About-Right";
import AboutLeft from "../components/About-Left";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";

import { baby } from "../PatientsFolder/baby";
import { children } from "../PatientsFolder/children";
import { pregnant } from "../PatientsFolder/pregnant";
import { adults } from "../PatientsFolder/adults";
import { seniors } from "../PatientsFolder/seniors";
import { sports } from "../PatientsFolder/sports";

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
      nourissons: baby,
      enfants: children,
      femmesEnceintes: pregnant,
      adultes: adults,
      seniors: seniors,
      sportifs: sports,
    };
  },
};
</script>

<style>
.patients-pic-cover {
  background-image: url("../assets/photo-gallery/shooting14.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>