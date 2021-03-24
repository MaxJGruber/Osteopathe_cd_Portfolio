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
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <a
                    href="#osteopathie"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <font-awesome-icon icon="hand-sparkles" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        L'ostéopathie
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Apprenez un peu plus sur l'art de l'ostéopathie.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#osteopathe"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/cursor-click -->
                    <font-awesome-icon icon="user-md" />

                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        L'ostéopathe
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Apprenez un peu plus sur Charles Dumeige et ses
                        preatiques.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#profession"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <font-awesome-icon icon="school" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        La profession
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Apprenez un peu plus sur ce que ça prend de devenir
                        ostéopathe.
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                >
                  <div class="flow-root">
                    <a
                      href="https://www.youtube.com/watch?v=h-fTfxgESzk"
                      target="_blank"
                      class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                      <!-- Heroicon name: outline/play -->
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
                      <!-- Heroicon name: outline/phone -->
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
                </div>
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
              <div
                class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
              >
                <router-link
                  to="/presentations"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/chart-bar -->
                  <font-awesome-icon icon="hand-sparkles" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      L'ostéopathie
                    </p>
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
                    <p class="text-base font-medium text-gray-900">
                      L'ostéopathe
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Apprenez un peu plus sur Charles Dumeige et ses
                      preatiques.
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
                      La profession
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Apprenez un peu plus sur ce que ça prend de devenir
                      ostéopathe.
                    </p>
                  </div>
                </router-link>
              </div>
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
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <a
                    href="#nourissons"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/support -->
                    <font-awesome-icon icon="baby" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les nourissons
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        A la naissance, le nourrisson a déjà subit d'importantes
                        contraintes sur l'ensemble de son corps.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#enfants"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/bookmark-alt -->
                    <font-awesome-icon icon="child" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les enfants et adolescents
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        On peut retrouver chez l’enfant des motifs de
                        consultation plus spécifiques tel que des troubles de la
                        concentration et du sommeil.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#enceinte"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/calendar -->
                    <font-awesome-icon icon="female" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les femmes enceintes
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        La femme enceinte peut souffrir de tout type de mal-être
                        dû principalement à la grossesse.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#adultes"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <font-awesome-icon icon="walking" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les adultes
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Le patient le plus général peut souffrir de stress,
                        mauvaises positions, faux mouvements, traumatismes...
                      </p>
                    </div>
                  </a>
                  <a
                    href="#seniors"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <font-awesome-icon icon="blind" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les séniors
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        De la vie active à la retraite, le sénior va devoir
                        faire face un changement de rythme inévitable et il
                        n'est pas rare, en effet, de voir apparaître de nouveaux
                        symptômes.
                      </p>
                    </div>
                  </a>
                  <a
                    href="#sportifs"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <font-awesome-icon icon="running" />
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Les sportifs
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Le sportif peut aussi avoir des douleurs particulières
                        dû à la forte activité physique. Mais aussi, il peut
                        avoir besoin d'un bilan avant une activité.
                      </p>
                    </div>
                  </a>
                  
                </div>
                
                <!-- <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                  <div>
                    <h3
                      class="text-sm tracking-wide font-medium text-gray-500 uppercase"
                    >
                      Recent Posts
                    </h3>
                    <ul class="mt-4 space-y-4">
                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          Boost your conversion rate
                        </a>
                      </li>

                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          How to use search engine optimization to drive traffic
                          to your site
                        </a>
                      </li>

                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          Improve your customer experience
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-5 text-sm">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all posts <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div> -->
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
              <div
                class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
              >
                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/support -->
                  <font-awesome-icon icon="baby" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les nourissons
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      A la naissance, le nourrisson a déjà subit d'importantes
                      contraintes sur l'ensemble de son corps.
                    </p>
                  </div>
                </router-link>

                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/bookmark-alt -->
                  <font-awesome-icon icon="child" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les enfants et adolescents
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      On peut retrouver chez l’enfant des motifs de consultation
                      plus spécifiques tel que des troubles de la concentration
                      et du sommeil.
                    </p>
                  </div>
                </router-link>

                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/calendar -->
                  <font-awesome-icon icon="female" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les femmes enceintes
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      La femme enceinte peut souffrir de tout type de mal-être
                      dû principalement à la grossesse.
                    </p>
                  </div>
                </router-link>

                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/shield-check -->
                  <font-awesome-icon icon="blind" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les adultes
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Le patient le plus général peut souffrir de stress,
                      mauvaises positions, faux mouvements, traumatismes...
                    </p>
                  </div>
                </router-link>
                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/shield-check -->
                  <font-awesome-icon icon="walking" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les séniors
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      De la vie active à la retraite, le sénior va devoir faire
                      face un changement de rythme inévitable et il n'est pas
                      rare, en effet, de voir apparaître de nouveaux symptômes.
                    </p>
                  </div>
                </router-link>
                <router-link
                  to="/patients"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/shield-check -->
                  <font-awesome-icon icon="running" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Les sportifs
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Le sportif peut aussi avoir des douleurs particulières dû
                      à la forte activité physique. Mais aussi, il peut avoir
                      besoin d'un bilan avant une activité.
                    </p>
                  </div>
                </router-link>
              </div>
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
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="#"
                class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/chart-bar -->

                <span class="ml-3 text-base font-medium text-gray-900">
                  Accueil
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/cursor-click -->

                <span class="ml-3 text-base font-medium text-gray-900">
                  Présentations
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/shield-check -->

                <span class="ml-3 text-base font-medium text-gray-900">
                  Patients
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 items-center rounded-md hover:bg-gray-50"
              >
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
    </div>
  </div>
</template>

<script>
export default {
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