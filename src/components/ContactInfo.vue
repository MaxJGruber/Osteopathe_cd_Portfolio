<template>
  <div class="py-12 bg-gray-50 contact-info-comp">
    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
      Horaires & Accès
    </h2>
    <div class="contact-info-container">
      <div class="contact-info">
        <ContactCard />
      </div>
      <div class="map-container">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import ContactCard from "./ContactCard";
export default {
  components: {
    Map,
    ContactCard,
  },
};
</script>

<style>
.contact-info-container {
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.contact-info-comp {
  height: 75vh;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-container {
  display: flex;
  place-content: center;
}
</style>