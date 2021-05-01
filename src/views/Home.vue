<template>
  <div>
    <LandingPage :info="info" :links="links" page="home" />
    <AttentionTab :page="`Page d'accueil`" />
    <Featured />
    <Hook />
    <ContactInfo />
    <Calendar />
    <div class="elfsight-app-20fce0e0-f9ef-427d-bbff-3b4df952898d"></div>
    <Footer />
    <CookieWarning />
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
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import CookieWarning from "../components/CookieWarning";

export default {
  name: "Home",
  components: {
    LandingPage,
    Hook,
    ContactInfo,
    Featured,
    Footer,
    Calendar,
    AttentionTab,
    CookieWarning,
  },
  data: () => {
    return {
      // data passed down as object to LANDING PAGE component which will be rendered with props
      info: {
        titlePart1: "Bienvenue sur le site de votre ostéopathe...",
        titlePart2: "Charles Dumeige",
        introPara: `Installé depuis 2019 à Meaux (Dept 77), Charles Dumeige, ostéopathe D.O est à votre écoute et se charge de soulager vos douleurs musculo-squelettiques.\n
        Il prend en charge ses patients au cabinet ou à domicile.`,
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
