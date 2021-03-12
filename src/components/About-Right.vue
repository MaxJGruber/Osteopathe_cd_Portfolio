<template>
  <div :id="segment.id" class="relative bg-white overflow-hidden about mb-10">
    <div class="max-w-7xl mx-auto">
      <main
        class="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10"
      >
        <div class="sm:text-center lg:text-right">
          <h1
            class="text-2xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-2xl"
          >
            <span class="block xl:inline">{{ segment.title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mr-0 lg:pl-15"
          >
            {{ segment.intro }}
          </p>
        </div>
      </main>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:w-1/2 about-pic-frame">
      <img
        class="h-auto w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full about-pic"
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
  height: 100%;
}

.about-pic-frame {
  margin: 2%;
  padding: 1%;
  width: fit-content;
}
.about-pic {
  width: auto;
  border-radius: 0.5em;
  border: 2px solid #3abfd6;
}
</style>