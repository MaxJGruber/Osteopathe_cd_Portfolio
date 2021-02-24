<template>
  <footer>
    <div class="center">
      <div class="footer-nav">
        <router-link to="/" class=""> Home</router-link>
        <router-link to="/contact-page" class=""> Contact</router-link>
        <router-link to="/photo-gallery" class=""> Galerie</router-link>
        <img src="../assets/Logo_Doctolib.svg.png" class="doctolib" />
        <!-- <font-awesome-icon :icon="['fab', 'fa-linkedin']" /> -->
      </div>
      <div>{{ new Date().getFullYear() }} — <strong>By Max Gruber</strong></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #5c71e5;
  padding: 5px;
}

footer *,
footer .center * {
  color: white;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-nav * {
  font-size: 1.15rem;
  padding: 3px;
  margin: 3px;
}

.footer-nav *:hover {
  background-color: white;
  color: #5c71e5;
  border-radius: 2em;
}

.doctolib {
  height: auto;
  width: 8%;
}
</style>