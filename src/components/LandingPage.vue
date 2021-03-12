<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-8xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-10 sm:pl-6 lg:pl-0">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <span class="sr-only">logo</span>
                <img class="h-8 w-auto sm:h-20 logo" src="../assets/logo.png" />

                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    v-on:click="open = !open"
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    id="main-menu"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg
                      class="h-6 w-6"
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
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:space-x-8">
              <router-link
                to="/"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ links.accueil }}</router-link
              >
              <router-link
                to="/presentations"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ links.presentations }}</router-link
              >
              <router-link
                to="/patients"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ links.patients }}</router-link
              >

              <router-link
                to="/contact-page"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ links.contact }}</router-link
              >
              <router-link
                to="/photo-gallery"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ links.galerie }}</router-link
              >
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div
          v-show="open"
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/logo.png" alt="" />
              </div>
              <div class="-mr-2">
                <button
                  v-on:click="open = !open"
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="h-6 w-6"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                <router-link
                  to="/"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >{{ links.accueil }}</router-link
                >

                <router-link
                  to="/presentations"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >{{ links.presentations }}</router-link
                >

                <router-link
                  to="patients"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >{{ links.patients }}</router-link
                >

                <router-link
                  to="/contact-page"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >{{ links.contact }}</router-link
                >
                <router-link
                  to="/photo-gallery"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >{{ links.galerie }}</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">{{ info.titlePart1 }}</span
              ><br v-show="page === 'contact'" />
              <span class="block text-logo-blue xl:inline">
                {{ info.titlePart2 }}</span
              >
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              {{ info.introPara }}
            </p>
            <div
              v-show="page"
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div v-show="page === 'contact'" class="rounded-md shadow">
                <a
                  v-bind:href="info.linkbutton1"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-logo-blue md:py-4 md:text-lg md:px-10"
                >
                  {{ info.button1 }}
                </a>
              </div>
              <div v-show="page === 'home'" class="rounded-md shadow">
                <router-link
                  v-bind:to="info.linkbutton1"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-logo-blue md:py-4 md:text-lg md:px-10"
                >
                  {{ info.button1 }}
                </router-link>
              </div>
              <div v-show="page === 'contact'" class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  v-bind:href="info.linkbutton2"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-logo-blue bg-logo-blue-light md:py-4 md:text-lg md:px-10"
                >
                  {{ info.button2 }}
                </a>
              </div>
              <div v-show="page === 'home'" class="mt-3 sm:mt-0 sm:ml-3">
                <router-link
                  v-bind:to="info.linkbutton2"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-logo-blue bg-logo-blue-light md:py-4 md:text-lg md:px-10"
                >
                  {{ info.button2 }}
                </router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        v-bind:src="info.image"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// Introduction component to page
// Depending on props passsed down, the same langing page is rendered with respective components (HOME/ CONACT PAGE)
export default {
  data() {
    return {
      open: false,
    };
  },
  props: { info: Object, links: Object, page: String },
};
</script>

<style>
.logo {
  height: auto !important;
  width: 10vw !important;
  margin-left: 0;
  padding-left: 0;
}
</style>