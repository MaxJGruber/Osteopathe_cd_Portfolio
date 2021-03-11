<template>
  <div class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-logo-blue font-semibold tracking-wide uppercase"
        >
          Informations Pratiques
        </h2>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/globe-alt -->
                <font-awesome-icon icon="money-bill-wave" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Paiement par espèces ou chèque uniquement
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Une attitude active dans l’approche relationnelle ostéopathe et
                patient.
              </dd> -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <font-awesome-icon icon="comment" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Consultation en anglais possible
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd> -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <font-awesome-icon icon="head-side-mask" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Respect des gestes barrières
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd> -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <font-awesome-icon icon="wheelchair" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Accessibles aux handicapés
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd> -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <font-awesome-icon icon="exclamation-triangle" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-yellow-500">
                Cartes bancaires non acceptées
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd> -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
              >
                <!-- Heroicon name: outline/scale -->
                <font-awesome-icon icon="exclamation-triangle" class="icon" />
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-yellow-500">
                Carte Vitale non acceptée
              </dt>
              <!-- <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd> -->
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.svg-inline--fa.fa-w-16,
.svg-inline--fa.fa-w-18,
.svg-inline--fa.fa-w-20 {
  width: 2em;
}

.icon {
  height: 90px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>