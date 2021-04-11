<template>
  <div>
    <div>
      <div class="mt-6">
        <nav class="grid gap-y-8">
          <router-link
            to="/"
            class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
          >
            <!-- Heroicon name: outline/chart-bar -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Accueil
            </span>
          </router-link>

          <router-link
            to="/presentations"
            class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
          >
            <!-- Heroicon name: outline/cursor-click -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Présentations
            </span>
          </router-link>

          <router-link
            to="/patients"
            class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
          >
            <!-- Heroicon name: outline/shield-check -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Patients
            </span>
          </router-link>

          <router-link
            to="/contact-age"
            class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
          >
            <!-- Heroicon name: outline/view-grid -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Contact & Informations
            </span>
          </router-link>

          <router-link
            to="/photo-gallery"
            class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
          >
            <!-- Heroicon name: outline/refresh -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Galerie
            </span>
          </router-link>
        </nav>
      </div>
    </div>
    <div class="py-6 space-y-6">
      <div class="grid grid-cols-2 gap-y-4 gap-x-8 ">
        <button
          @click="gotToSection('#nourissons')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les nourissons
        </button>

        <button
          @click="gotToSection('#enfants')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les enfants & adolescents
        </button>
        <button
          @click="gotToSection('#enceinte')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les femmes enceintes
        </button>
        <button
          @click="gotToSection('#adultes')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les adultes
        </button>
        <button
          @click="gotToSection('#seniors')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les séniors
        </button>
        <button
          @click="gotToSection('#sportifs')"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les sportifs
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotToSection(element) {
      document.querySelector(element).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>