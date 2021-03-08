
<template>
  <footer>
    <div class="center">
      <div class="footer-nav">
        <router-link
          to="/"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          Home</router-link
        >
        <router-link
          to="/contact-page"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          Contact</router-link
        >
        <router-link
          to="/photo-gallery"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          Galerie</router-link
        >
        <a
          href="https://www.doctolib.fr/osteopathe/meaux/charles-dumeige"
          target="_blank"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          Doctolib</a
        >
        <a
          href="https://www.pagesjaunes.fr/pros/59987222"
          target="_blank"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          Pages Jaunes</a
        >
        <a
          href="#"
          target="_blank"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
        >
          LinkedIn</a
        >
      </div>
      <div class="text-white">
        {{ new Date().getFullYear() }} —
        <a
          href="https://www.linkedin.com/in/maximilian-j-gruber/"
          target="_blank"
          class="text-white footer-links px-2 py-1 rounded-md text-sm font-medium"
          ><strong>By Max Gruber</strong></a
        >
      </div>
    </div>
  </footer>
</template>

<script>
// FOOTER component rendered on the bottom of every page 
export default {
  data() {
    return { active: false };
  },
};
</script>

<style>
footer {
  background-color: #3abfd6;
  padding: 5px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-links:hover {
  background-color: white;
  color: #3abfd6;
}
</style>