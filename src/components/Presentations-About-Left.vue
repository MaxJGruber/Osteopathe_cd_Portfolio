<template>
  <div :id="segment.id" class="relative bg-white overflow-hidden about mb-10">
    <div class="max-w-7xl mx-auto">
      <main
        class="mt-1 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pr-5 xl:mt-10"
      >
        <div id="grid-client">
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
            >
              <span class="block xl:inline">{{ segment.title }}</span>
            </h1>
            <p
              class="mt-4 sm:max-w-lg text-base text-gray-500 sm:mt-6 sm:text-md md:mt-6 md:text-lg pre-formatted"
            >
              {{ segment.intro }}
            </p>
          </div>
          <div class="flex justify-center">
            <div class="about-pic-frame">
              <div class="flex justify-center">
                <img
                  class="object-cover sm:h-72 md:h-96 lg:h-full w-1/2 lg:w-1/2 about-pic"
                  :src="segment.img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div v-show="segment.subtext1" class="sm:text-center lg:text-left">
          <h1
            class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
          >
            <span class="block xl:inline">{{ segment.subtext1Title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
          >
            {{ segment.subtext1 }}
          </p>
          <p
            class="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
          >
            {{ segment.subtext1list }}
          </p>
        </div>

        <div v-show="segment.subtext2" class="sm:text-center lg:text-left mt-8">
          <h1
            v-show="segment.subtext2Title"
            :class="segment.subtext2Title ? 'mb-5' : ''"
            class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
          >
            <span class="block xl:inline">{{ segment.subtext2Title }}</span>
          </h1>
          <p
            :class="!segment.img2 ? 'lg:mt-5' : ''"
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mt-0 lg:mr-4 pre-formatted"
          >
            {{ segment.subtext2 }}
          </p>
        </div>

        <div v-show="segment.subtext3" class="sm:text-center lg:text-left mt-8">
          <h1
            v-show="segment.subtext3Title"
            class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
          >
            <span class="block xl:inline">{{ segment.subtext3Title }}</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
          >
            {{ segment.subtext3 }}
          </p>
        </div>
      </main>
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
</style>