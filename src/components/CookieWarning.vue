<template>
  <!--
    Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
    your content from being obscured when the user scrolls to the bottom of the page.
  -->
  <div class="fixed inset-x-0 bottom-0 " v-show="open">
    <div class="bg-logo-gray-nohover">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class=" p-2 rounded-lg bg-logo-blue-nohover">
              <!-- Heroicon name: outline/speakerphone -->
              <font-awesome-icon icon="cookie-bite" class="text-white" />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                Ce site utilise des cookies!
              </span>
              <span class="hidden md:inline">
                Des cookies, petits fichiers informatiques, sont utilisés sur ce
                site pour recueillir des statistiques de visites anonymes pour
                optimiser la navigation.
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <router-link
              to="/legal-notes"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-logo-gray bg-white hover:bg-indigo-50"
            >
              En savoir plus
            </router-link>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              v-on:click="open = false"
              class="-mr-1 flex p-2 rounded-md bg-logo-blue focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span class="sr-only">Dismiss</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { open: true, message: "" };
  },
};
</script>
