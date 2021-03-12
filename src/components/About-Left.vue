<template>
  <div :id="segment.id" class="relative bg-white overflow-hidden about mt-10">
    <div class="max-w-7xl mx-auto">
      <main
        class="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10"
      >
        <div class="sm:text-center lg:text-left">
          <h1
            class="text-xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-2xl"
          >
            <span class="block xl:inline">{{ segment.title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0"
          >
            {{ segment.intro }}
          </p>
          <div
            class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          ></div>
        </div>
      </main>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 about-pic-frame">
      <img
        class="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full about-pic"
        :src="segment.img"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    segment: Object,
  },
};
</script>

<style>
.about {
  height: 60vh;
}
</style>