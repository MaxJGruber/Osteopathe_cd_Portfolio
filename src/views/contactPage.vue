<template>
  <div>
    <LandingPage :info="infoContact" :links="links" page="contact" />
    <AttentionTab :message="message" />
    <ContactInfo />
    <PriceList />
    <Reimbursements />
    <PracticalInfo />
    <Footer />
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage";
import ContactInfo from "../components/ContactInfo";
import PriceList from "../components/PriceList";
import Reimbursements from "../components/Reimbursements";
import AttentionTab from "../components/AttentionTab";
import PracticalInfo from "../components/PracticalInfo";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",
  components: {
    LandingPage,
    ContactInfo,
    AttentionTab,
    PriceList,
    PracticalInfo,
    Reimbursements,
    Footer,
  },
  data: () => {
    return {
      // data passed down as object to LANDING PAGE component which will be rendered with props
      infoContact: {
        titlePart1: "Faîtes vous du bien en allant voir...",
        titlePart2: "Charles Dumeige",
        introPara:
          "Installé depuis 2019 dans son cabinet à Meaux (Dept 77), Charles Dumeige, ostéopathe D.O est à votre écoute et se charge de soulager vos douleurs musculo-squelettiques.",
        button1: "Appelez le 06 38 69 77 16",
        linkbutton1: "tel:06 38 69 77 16",
        button2: "Contactez par mail",
        linkButton2: "mailto:charlesdumeige@outlook.fr?subject=Contact",
        image: require("../assets/photo-gallery/shooting9.jpg"),
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
</style>