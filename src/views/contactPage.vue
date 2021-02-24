<template>
  <div>
    <ContactHeaderPage />
    <ContactInfo />
    <PriceList />
    <Reimbursements />
    <PracticalInfo />
    <Footer />
  </div>
</template>

<script>
import ContactHeaderPage from "../components/ContactPageHeader";
import ContactInfo from "../components/ContactInfo";
import PriceList from "../components/PriceList";
import Reimbursements from "../components/Reimbursements";
import PracticalInfo from "../components/PracticalInfo";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",
  components: {
    ContactHeaderPage,
    ContactInfo,
    PriceList,
    PracticalInfo,
    Reimbursements,
    Footer,
  },
};
</script>

<style>
</style>