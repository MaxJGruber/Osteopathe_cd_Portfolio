<template>
  <div>
    <div>
      <div class="mt-6">
        <nav class="grid gap-y-8">
          <a href="#" class="-m-3 p-3 items-center rounded-md hover:bg-gray-50">
            <!-- Heroicon name: outline/chart-bar -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Accueil
            </span>
          </a>

          <a href="#" class="-m-3 p-3 items-center rounded-md hover:bg-gray-50">
            <!-- Heroicon name: outline/cursor-click -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Présentations
            </span>
          </a>

          <a href="#" class="-m-3 p-3 items-center rounded-md hover:bg-gray-50">
            <!-- Heroicon name: outline/shield-check -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Patients
            </span>
          </a>

          <a href="#" class="-m-3 p-3 items-center rounded-md hover:bg-gray-50">
            <!-- Heroicon name: outline/view-grid -->

            <span class="ml-3 text-base font-medium text-gray-900">
              Contact & Informations
            </span>
          </a>

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
    <div class="py-6 px-5 space-y-6">
      <div class="grid grid-cols-2 gap-y-4 gap-x-8">
        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          L'ostéopathie
        </a>

        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          L'ostéopathe
        </a>

        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          La profession
        </a>

        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les nourissons
        </a>

        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les enfants & adolescents
        </a>
        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les femmes enceintes
        </a>
        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les adultes
        </a>
        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les séniors
        </a>
        <a
          href="#"
          class="text-base font-medium mobile-sub-nav text-logo-blue hover:text-gray-700"
        >
          Les sportifs
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>