<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-logo-blue font-semibold tracking-wide uppercase"
        >
          La Galerie
        </h2>
        <p class="mt-5 mb-10 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Decouvrez en image Charles Dumeige en action dans son cabinet pour
          exercer différentes techniques qui relèvent de l'ostéopathie.
        </p>
        <div class="links-social-media">
          <a
            href="https://www.google.com/search?q=charles+dumeige"
            target="_blank"
            class=""
          >
            <i class="fab fa-google icon"></i>
          </a>
          <a
            href="https://www.doctolib.fr/osteopathe/meaux/charles-dumeige"
            target="_blank"
            class=""
          >
            <img src="../assets/doctolib-logo.png" class="doctolib-logo" />
          </a>
          <a
            href="https://www.pagesjaunes.fr/pros/59987222"
            target="_blank"
            class=""
          >
            <img
              src="../assets/pages_jaunes_logo.png"
              class="pagesjaunes-logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/charles-dumeige-osteopathe/"
            target="_blank"
            class=""
          >
            <i class="fab fa-linkedin icon"></i>
          </a>
        </div>
        <p class="mt-10 mb-10 max-w-6xl text-lg text-gray-500 lg:mx-auto">
          N'hesitez pas à suivre les actualités de Charles Dumeige sur les
          réseaux sociaux (Google & LinkedIn)
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.links-social-media {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.links-social-media .icon {
  margin: 0 10px;
}

.links-social-media .fa-google {
  font-size: 2em;
  color: #21556d;
}

.links-social-media .fa-linkedin {
  font-size: 2.2em;
  color: #21556d;
}

.pagesjaunes-logo {
  width: 8.5em;
}
.doctolib-logo {
  width: 7em;
}
</style>