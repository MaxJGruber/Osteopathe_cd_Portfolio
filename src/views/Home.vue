<template>
  <div>
    <LandingPage :info="info" :links="links" page="home" />
    <AttentionTab :message="message" />
    <Featured />
    <ContactInfo />
    <Hook />
    <Footer />
    <!-- <div class="elfsight-app-1b9ea368-a2a5-4b67-a658-806a9bbba15e review"></div> -->
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
          "Installé depuis 2019 dans son cabinet à Meaux (Dept 77), Charles Dumeige, ostéopathe D.O est à votre écoute et se charge de soulager vos douleurs musculo-squelettiques.",
        button1: "Prendre Contact",
        linkbutton1: "/contact-page",
        button2: "Apprenez Plus",
        image: require("../assets/Osteo1.jpg"),
      },
      links: {
        accueil: "Accueil",
        presentations: "Présentations",
        patients: "Patients",
        contact: "Contact & Informations Pratiques",
        galerie: "Galerie",
      },
      // message passed down as prop to ATTENTIONTAB component
      message: {
        long:
          "Les consultations continuent à être prise en charge le dimanche, en cas d'urgence!",
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
