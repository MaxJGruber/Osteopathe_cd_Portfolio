<template>
  <div :id="segment.id" class="relative bg-white overflow-hidden about mb-10">
    <div class="max-w-7xl mx-auto">
      <main
        class="mt-1 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pr-5 xl:mt-10"
      >
        <div class="grid">
          <div class="about-pic-frame">
            <img
              class="h-auto w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full about-pic"
              :src="segment.img"
              alt=""
            />
          </div>
          <div class="sm:text-center lg:pl-9">
            <h1
              class="text-xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl"
            >
              <span class="block xl:inline">{{ segment.title }}</span>
            </h1>
            <p
              class="mt-3 text-gray-500 lg:text-left sm:mt-5 sm:text-md sm:max-w-xl md:mt-5 md:text-lg pre-formatted"
            >
              {{ segment.intro }}
            </p>
          </div>
        </div>
        <div
          v-show="segment.subtext1"
          class="sm:text-center lg:text-left xl:mt-10"
        >
          <h1
            v-show="segment.babyTitle"
            class="text-xl tracking-tight font-bold text-logo-gray sm:text-5xl md:text-xl my-5"
          >
            <span class="block xl:inline">{{ segment.babyTitle }}</span>
          </h1>
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
        </div>
        <div class="grid" :class="segment.img2 ? 'mt-8' : ''">
          <div
            v-show="segment.subtext2"
            :class="!segment.img2 ? 'mt-8' : ''"
            class="sm:text-center lg:text-left"
          >
            <h1
              v-show="segment.subtext2Title"
              class="text-lg tracking-tight font-bold text-logo-gray sm:text-5xl md:text-lg"
            >
              <span class="block xl:inline">{{ segment.subtext2Title }}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-md lg:mr-4 pre-formatted"
            >
              {{ segment.subtext2 }}
            </p>
          </div>
          <div v-show="segment.img2">
            <div class="about-pic-frame">
              <img
                class="h-auto w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full about-pic"
                :src="segment.img2"
                alt=""
              />
            </div>
          </div>
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