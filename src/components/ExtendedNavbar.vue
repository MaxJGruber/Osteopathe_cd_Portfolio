<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-logo-blue-nohover">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <span class="sr-only">Workflow</span>
          <img
            class="h-8 w-auto nav-logo sm:h-10"
            src="../assets/logo.png"
            alt=""
          />
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            v-on:click="openMobileMenu = !openMobileMenu"
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
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
        <nav class="hidden md:flex space-x-10">
          <router-link to="/" class="text-base font-medium text-white">
            Accueil
          </router-link>
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              v-on:click="open('open')"
              type="button"
              class="text-white group bg-logo-blue-nohover rounded-md inline-flex items-center text-base font-medium focus:outline-none"
              aria-expanded="false"
            >
              <router-link to="/presentations">
                <span class="text-white">Présentations</span>
              </router-link>
              <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="text-white ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <div
              v-show="openPresentations && page === 'presentations'"
              class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            >
              <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <PresentationsPresentationsExt />
              </div>
            </div>
          </div>
          <div
            v-show="openPresentations && page !== 'presentations'"
            class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
          >
            <div
              class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <PatientsPresentationsExt />
            </div>
          </div>

          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              v-on:click="open('openPatients')"
              type="button"
              class="text-white group bg-logo-blue-nohover rounded-md inline-flex items-center text-base font-medium focus:outline-none"
              aria-expanded="false"
            >
              <router-link to="/patients"
                ><span class="text-white">Patients</span></router-link
              >
              <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="text-white ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <div
              v-show="openPatients && page === 'patients'"
              class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
            >
              <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <PatientsPatientsExt />
              </div>
            </div>
          </div>

          <div
            v-show="openPatients && page !== 'patients'"
            class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
          >
            <div
              class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <PresentationsPatientsExt />
            </div>
          </div>

          <router-link
            to="/contact-page"
            class="text-base font-medium text-white"
            >Contact & Informations
          </router-link>
          <router-link
            to="/photo-gallery"
            class="text-base font-medium text-white"
          >
            Galerie
          </router-link>
        </nav>
        <div
          class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
        ></div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      v-show="openMobileMenu"
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="../assets/logo.png" alt="Workflow" />
            </div>
            <div class="-mr-2">
              <button
                v-on:click="openMobileMenu = !openMobileMenu"
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
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
          <div v-show="page === 'patients'">
            <MobPatients />
          </div>
          <div v-show="page === 'presentations'">
            <MobPresentations />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PresentationsPatientsExt from "./ExtendedNavbarExtensions/Presentations-PatientsExt";
import PresentationsPresentationsExt from "./ExtendedNavbarExtensions/Presentations-PresentationsExt";
import PatientsPresentationsExt from "./ExtendedNavbarExtensions/Patients-PresentationsExt";
import PatientsPatientsExt from "./ExtendedNavbarExtensions/Patients-PatientsExt";
import MobPatients from "./ExtendedNavbarExtensions/Mob-PatientsExt";
import MobPresentations from "./ExtendedNavbarExtensions/Mob-PresentationsExt";

export default {
  components: {
    PresentationsPatientsExt,
    PresentationsPresentationsExt,
    PatientsPresentationsExt,
    PatientsPatientsExt,
    MobPatients,
    MobPresentations,
  },
  data: () => {
    return {
      openMobileMenu: false,
      openPatients: false,
      openPresentations: false,
    };
  },
  props: { page: String },
  methods: {
    open(tab) {
      if (tab === "openPatients") {
        if (this.openPresentations === true) {
          this.openPresentations = !this.openPresentations;
        }
        return (this.openPatients = !this.openPatients);
      } else {
        if (this.openPatients === true) {
          this.openPatients = !this.openPatients;
        }
        return (this.openPresentations = !this.openPresentations);
      }
    },
  },
};
</script>

<style>
.nav-logo {
  height: 4em;
  border-radius: 0.5em;
}

.mobile-sub-nav {
  -webkit-box-shadow: 0px 10px 5px 0px rgba(194, 192, 194, 1);
  -moz-box-shadow: 0px 10px 5px 0px rgba(194, 192, 194, 1);
  box-shadow: 0px 10px 5px 0px rgba(194, 192, 194, 1);
  border-radius: 0.5em;
}
.svg-inline--fa.fa-w-14,
.svg-inline--fa.fa-w-12,
.svg-inline--fa.fa-w-20,
.svg-inline--fa.fa-w-10,
.svg-inline--fa.fa-w-8,
.svg-inline--fa.fa-w-13 {
  width: 1.5em;
}

.svg-inline--fa {
  height: 1.5em;
}

.svg-inline--fa:hover {
  color: #3abfd6;
}
</style>