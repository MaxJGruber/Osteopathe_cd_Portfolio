<template>
  <div>
    <ContactHeaderPage />
    <ContactInfo />
    <PriceList />
    <PracticalInfo />
  </div>
</template>

<script>
import ContactHeaderPage from "../components/ContactPageHeader";
import ContactInfo from "../components/ContactInfo";
import PriceList from "../components/PriceList";
import PracticalInfo from "../components/PracticalInfo";

export default {
  name: "ContactPage",
  components: {
    ContactHeaderPage,
    ContactInfo,
    PriceList,
    PracticalInfo,
  },
};
</script>

<style>
@import "../tailwind.css";
</style>