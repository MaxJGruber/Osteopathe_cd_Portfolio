<template>
  <footer>
    <div class="center">
      <div class="footer-nav">
        <router-link to="/" class="nav-link"> Home</router-link>
        <router-link to="/contact-page" class="nav-link"> Contact</router-link>
        <router-link to="/photo-gallery" class="nav-link"> Galerie</router-link>
        <a
          href="https://www.doctolib.fr/osteopathe/meaux/charles-dumeige"
          class="nav-link"
        >
          Doctolib</a
        >
        <!-- <font-awesome-icon :icon="['fab', 'fa-linkedin']" /> -->
      </div>
      <div>
        {{ new Date().getFullYear() }} —
        <a
          href="https://www.linkedin.com/in/maximilian-j-gruber/"
          target="_blank"
          ><strong>By Max Gruber</strong></a
        >
      </div>
    </div>
  </footer>
</template>

<script>
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

.footer-nav .nav-link {
  font-size: 1.15rem;
  padding: 0.2em;
  margin: 0.5em;
}

.footer-nav .nav-link:hover {
  background-color: white;
  color: #3abfd6;
  border-radius: 2em;
}
/* 
.doctolib {
  height: auto;
  width: 5em;
  display: inline;
  margin: 0;
  padding: 0;
} */
</style>