<template>
  <div>
    <NavBar />
    <div class="photo-grid pt-5">
      <div v-for="(img, key) in photos" :key="key" class="pic-container">
        <button v-on:click="zoom(img)" @click="lightboxOn = !lightboxOn">
          <img :src="img" class="pic" alt="pic" />
        </button>
      </div>
    </div>
    <LightBox
      v-if="lightboxOn"
      :media="media"
      :showLightBox="lightboxOn"
    ></LightBox>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import apiHandler from "../apiHandler";
import LightBox from "../components/LightBox";

export default {
  components: {
    NavBar,
    Footer,
    LightBox,
  },
  data() {
    return {
      photos: [],
      media: [
        {
          thumb: null,
          src: "",
          caption: "Image caption",
          srcset: null, // for responsive images
        },
      ],
      lightboxOn: false,
    };
  },
  methods: {
    getPics() {
      apiHandler
        .getPicUrls("/api/pics")
        .then((res) => (this.photos = res))
        .catch((err) => console.log(err));
    },
    zoom(linkTarget) {
      this.media = [
        {
          thumb: linkTarget,
          src: linkTarget,
          caption: "Image caption",
          srcset: linkTarget, // for responsive images
        },
      ];
      console.log(this.lightboxOn);
    },
  },
  created() {
    this.getPics();
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
  width: 100% !important;
  height: auto !important;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-grid {
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  height: auto;
}

.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  width: 100% !important;
  height: 100% !important;
  transition: 1s;
  object-fit: contain;
}

.pic:hover {
  filter: grayscale(100%);
  transform: scale(1.1);
}
</style>