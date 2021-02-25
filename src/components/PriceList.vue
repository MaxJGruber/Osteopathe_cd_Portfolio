<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-logo-blue font-semibold tracking-wide uppercase"
        >
          Tarifs
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
                <p class="price">55€</p>
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Consultation d'ostéopathie
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
                <!-- Heroicon name: outline/scale -->
                <p class="price">70€</p>
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Consultation d'ostéopathie le dimanche
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
                <p class="price">80€</p>
              </div>
            </div>
            <div class="ml-4 center">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Consultation d'ostéopathie à domicile
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
    <p class="mt-10 max-w-2xl text-sm text-gray-500 lg:mx-auto">
      Ces honoraires vous sont communiqués à titre indicatif par le praticien.
      Ils peuvent varier selon le type de soins finalement réalisés en cabinet,
      le nombre de consultations et les actes additionnels nécessaires. En cas
      de dépassement des tarifs, le praticien doit en avertir préalablement le
      patient.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.price {
  font-weight: bolder;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>