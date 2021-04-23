<template>
  <div>
    <NavBar />
    <div class="bg-logo-gray-nohover legal">
      <div class="info-plate">
        <div class="lg:text-center">
          <h2
            class="text-base text-logo-blue font-semibold tracking-wide uppercase"
          >
            Mentions légales
          </h2>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center my-5">
              <h2
                class="text-base text-logo-gray font-semibold tracking-wide uppercase"
              >
                Contenu écrit
              </h2>
              <h1
                class="text-lg mt-5 tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
              >
                Tous les textes et articles sur le site ont été écrits par
                <a
                  href="https://www.linkedin.com/in/charles-dumeige-osteopathe/"
                  target="_blank"
                  class="link"
                  >Charles Dumeige</a
                >.
              </h1>
              <p class="mt-10 mb-10 max-w-6xl text-md text-gray-500 lg:mx-auto">
                Toute opinion ou avis présenté sur le site, a pour unique but
                d'informer les visiteurs, et n'a aucunement pour but d'offenser
                ou discriminer contre tout type de sexe, d'âge ou d'handicap.
              </p>
              <p class="mt-10 mb-10 max-w-6xl text-md text-gray-500 lg:mx-auto">
                Toute description de type de patient ou sur l'ostéopathie, est
                recherché et étudier par Charles Dumeige, ostéopathe certifié et
                diplômé, et possède pour unique but d'informer les visiteurs.
              </p>
            </div>
          </div>
          <div class="lg:text-center my-5">
            <h2
              class="text-base text-logo-gray font-semibold tracking-wide uppercase"
            >
              Informations liées à la création du site
            </h2>
            <h1
              class="text-lg mt-5 tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
            >
              Tout le site a été dévelopé par
              <a
                href="https://www.linkedin.com/in/maximilian-j-gruber/"
                target="_blank"
                class="link"
                >Maximilian Gruber</a
              >.
            </h1>
            <h2
              class="text-base text-logo-gray font-semibold tracking-wide uppercase"
            >
              Nom de domaine
            </h2>
            <p class="mt-10 mb-10 max-w-6xl text-md text-gray-500 lg:mx-auto">
              Ce site est hébérgé par nos soins avec le nom de domaine acheté chez 1&1 IONOS
              <strong>charles-dumeige-osteomeaux.fr</strong>.
            </p>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center my-5">
              <h2
                class="text-base text-logo-gray font-semibold tracking-wide uppercase"
              >
                Contenu visuel
              </h2>
              <h1
                class="text-lg mt-5 tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
              >
                Certaines de nos photos ont été légalement acheté et téléchargé
                sur
                <a
                  href="https://www.istockphoto.com/fr"
                  target="_blank"
                  class="link"
                  >iStock.com</a
                >
                avec une licence standard qui nous permet d’obtenir une
                utilisation personnelle, professionnelle ou commerciale du
                fichier, ou tout autre type d'utilisation qui n'est pas interdit
                par la licence.
              </h1>
              <p class="mt-10 mb-10 max-w-6xl text-md text-gray-500 lg:mx-auto">
                Cela signifie que nous avons le droit d'utiliser ces contenus
                dans les domaines suivants : publicité, marketing, applications,
                sites Internet, réseaux sociaux, télévision et films,
                présentations, journaux, magazines et livres, packaging /
                emballage et des centaines d'autres types d'utilisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.legal {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-plate {
  width: 80vw;
  height: 80%;
  background-color: white;
  border-radius: 1em;
  padding: 2em;
  margin: 3em 0;
}

.link {
  text-decoration: underline;
}
</style>