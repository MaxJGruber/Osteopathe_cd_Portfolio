<template>
  <div>
    <ContactHeaderPage />
    <ContactInfo />
  </div>
</template>

<script>
import ContactHeaderPage from "../components/ContactPageHeader";
import ContactInfo from "../components/ContactInfo";
export default {
  name: "ContactPage",
  components: {
    ContactHeaderPage,
    ContactInfo,
  },
};
</script>

<style>
@import "../tailwind.css";
</style>