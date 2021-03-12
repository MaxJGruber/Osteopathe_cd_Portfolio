<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-logo-blue-nohover">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <!-- <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> -->
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class="text-white nav-photo-gallery px-3 py-2 rounded-md text-sm font-medium"
                >Accueil</router-link
              >
              <a
                href="#"
                class="text-white nav-photo-gallery px-3 py-2 rounded-md text-sm font-medium"
                >Présentations</a
              >
              <a
                href="#"
                class="text-white nav-photo-gallery px-3 py-2 rounded-md text-sm font-medium"
                >Patients</a
              >
              <router-link
                to="/contact-page"
                class="text-white nav-photo-gallery px-3 py-2 rounded-md text-sm font-medium"
                >Contact & Informations</router-link
              >
              <router-link
                to="/photo-gallery"
                class="text-white nav-photo-gallery px-3 py-2 rounded-md text-sm font-medium"
                >Galerie</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          to="/"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >Accueil</router-link
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Présentations</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Patients</a
        >
        <router-link
          to="/contact-page"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact & Informations</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
// NAVBAR component is only rendered on Photo Gallery page!!!
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
.nav-photo-gallery:hover {
  background-color: white;
  color: #3abfd6;
}
</style>