<template>
  <div>
    <LandingPage :info="info" :links="links" page="home" />
    <AttentionTab :message="message" />
    <Featured />
    <Hook />
    <ContactInfo />
    <!-- <div class="elfsight-app-20fce0e0-f9ef-427d-bbff-3b4df952898d"></div> -->
    <Footer />
  </div>
</template>

<script>
// HOME PAGE
// PAGE RENDERED AT WEBSITE START
import LandingPage from "../components/LandingPage.vue";
import ContactInfo from "../components/ContactInfo";
import Hook from "../components/Hook";
import Featured from "../components/Featured.vue";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    LandingPage,
    Hook,
    ContactInfo,
    Featured,
    Footer,
    AttentionTab,
  },
  data: () => {
    return {
      // data passed down as object to LANDING PAGE component which will be rendered with props
      info: {
        titlePart1: "Bienvenue sur le site de votre ostéopathe...",
        titlePart2: "Charles Dumeige",
        introPara:
          "Installé depuis 2019 à Meaux (Dept 77), Charles Dumeige, ostéopathe D.O est à votre écoute et se charge de soulager vos douleurs musculo-squelettiques.\nIl prend en charge ses patients au cabinet ou à domicile.",
        button1: "Prendre Contact",
        linkbutton1: "/contact-page",
        button2: "En Savoir Plus",
        linkbutton2: "/presentations",
        image: require("../assets/intro-pic.jpeg"),
      },
      links: {
        accueil: "Accueil",
        presentations: "Présentations",
        patients: "Patients",
        contact: "Contact & Informations",
        galerie: "Galerie",
      },
      // message passed down as prop to ATTENTIONTAB component
      message: {
        long:
          "Les consultations continuent d'être prises en charge le dimanche, en cas d'urgence!",
        short: "RDV d'urgence le dimanche",
      },
    };
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
}
</style>
