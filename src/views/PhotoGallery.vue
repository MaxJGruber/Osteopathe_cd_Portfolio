<template>
  <div>
    <NavBar />
    <div class="center">
      <v-carousel class="carousel" cycle :show-arrows="false">
        <v-carousel-item
          v-for="(img, key) in photos"
          :key="key"
          :src="getImgUrl(img)"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="carousel-pic"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="photo-grid">
      <div v-for="(img, key) in photos" :key="key" class="pic-container">
        <img :src="getImgUrl(img)" class="pic" alt="pic" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
  methods: {
    getImgUrl: function (num) {
      return require("../assets/photo-gallery/shooting" + num + ".jpg");
    },
  },
};
</script>

<style>
.carousel {
  margin-top: 10px;
  height: 50%;
  width: 50%;
}
.carousel-pic {
  max-width: 100%;
  max-height: 100%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  height: auto;
}

.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  max-width: 100%;
  max-height: 80%;
  padding: 10px;
}
</style>