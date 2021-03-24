<template>
  <div>
    <ExtendedNavbar :page="'presentations'" />
    <div class="presentation-pic-cover"></div>
    <AttentionTab :message="message1" />
    <Disclaimer />
    <hr />
    <AboutRight :segment="osteoBusiness" />
    <hr />
    <AboutLeft :segment="osteoAboutClient" />
    <div class="elfsight-app-20fce0e0-f9ef-427d-bbff-3b4df952898d"></div>
    <hr />
    <AboutRight :segment="osteoAboutJob" />
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
      osteoBusiness: {
        id: "osteopathie",
        title: "L'ostéopathie: l'art du métier",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting2.jpg"),
      },
      osteoAboutClient: {
        id: "osteopathe",
        title: "L'ostéopathe: Charles Dumeige",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting3.jpg"),
      },
      osteoAboutJob: {
        id: "profession",
        title: "La profession",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting11.jpg"),
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