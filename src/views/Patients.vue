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
    <AboutRight :segment="sportifs" />
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
      nourissons: {
        id: "nourissons",
        title: "Les nourissons",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting2.jpg"),
      },
      enfants: {
        id: "enfants",
        title: "Les enfants & adolescents",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting11.jpg"),
      },
      femmesEnceintes: {
        id: "enceinte",
        title: "Les femmes enceintes",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting5.jpg"),
      },
      adultes: {
        id: "adultes",
        title: "Les adultes & séniors",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting12.jpg"),
      },
      sportifs: {
        id: "sportifs",
        title: "Les sportifs",
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
.patients-pic-cover {
  background-image: url("../assets/photo-gallery/shooting14.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>