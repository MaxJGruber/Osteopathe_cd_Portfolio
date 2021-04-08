<template>
  <div class="relative grid gap-6 bg-white px-5 py-2 sm:gap-8 sm:p-8 ">
    <router-link
      to="/presentations"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/chart-bar -->
      <font-awesome-icon icon="hand-sparkles" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">L'ostéopathie</p>
        <p class="mt-1 text-sm text-gray-500">
          Apprenez un peu plus sur l'art de l'ostéopathie.
        </p>
      </div>
    </router-link>

    <router-link
      to="/presentations"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/cursor-click -->
      <font-awesome-icon icon="user-md" />

      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">L'ostéopathe</p>
        <p class="mt-1 text-sm text-gray-500">
          Apprenez un peu plus sur Charles Dumeige et ses pratiques.
        </p>
      </div>
    </router-link>

    <router-link
      to="/presentations"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/shield-check -->
      <font-awesome-icon icon="school" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">
          Les valeurs de la profession
        </p>
        <p class="mt-1 text-sm text-gray-500">
          Quelques mots sur les valeurs de l'ostéopathie selon Charles Dumeige.
        </p>
      </div>
    </router-link>
    <!-- <div
      class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
    >
      <div class="flow-root">
        <a
          href="https://www.youtube.com/watch?v=h-fTfxgESzk"
          target="_blank"
          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Heroicon name: outline/play
          <svg
            class="flex-shrink-0 h-6 w-6 text-gray-400"
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
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="ml-3">Regarder une Demo</span>
        </a>
      </div>

      <div class="flow-root">
        <router-link
          to="/contact-page"
          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Heroicon name: outline/phone
          <svg
            class="flex-shrink-0 h-6 w-6 text-gray-400"
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="ml-3">Contact</span>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>