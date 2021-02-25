<template>
  <div>
    <LandingPage :info="infoContact" page="contact"/>
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
import PracticalInfo from "../components/PracticalInfo";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",
  components: {
    LandingPage,
    ContactInfo,
    PriceList,
    PracticalInfo,
    Reimbursements,
    Footer,
  },
  data: () => {
    return {
      infoContact: {
        titlePart1: "Faîtes vous du bien en allant voir...",
        titlePart2: "Charles Dumeige",
        introPara:
          "Installé depuis 2019 dans son cabinet à Meaux (Dept 77), Charles Dumeige, osthéopathe D.O est à votre écoute et se charge de soulager vos douleurs musculo-squelettiques.",
        button1: "Appelez le 06 38 69 77 16",
        linkbutton1: "tel:06 38 69 77 16",
        button2: "Contactez par mail",
        linkButton2: "mailto:charlesdumeige@outlook.fr?subject=Contact",
        image: require("../assets/photo-gallery/shooting9.jpg"),
      },
    };
  },
};
</script>

<style>
</style>