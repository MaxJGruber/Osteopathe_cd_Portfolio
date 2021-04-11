<template>
  <div>
    <ExtendedNavbar :page="'patients'" />
    <div class="patients-pic-cover"></div>
    <AttentionTab :page="`Page des patients`" />
    <div class="mobile-margin">
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
    </div>
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
  background-image: url("../assets/photo-gallery/patients-banner-pic.jpg");
  background-size: cover;
  background-position: center;
    height: 20rem;
}
.about {
  height: auto;
}

.grid {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
}

.about-pic-frame {
  width: fit-content;
  max-height: 100%;
}
.about-pic {
  border-radius: 0.5em;
  border: 2px solid #3abfd6;
}

@media screen and (min-width: 400px) {
  .mobile-margin {
    margin: auto 1.2rem;
  }
}
</style>