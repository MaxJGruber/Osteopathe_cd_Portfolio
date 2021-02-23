<template>
  <div>
    <NavBar />
    <div class="photo-grid">
      <div v-for="(img, key) in photos" :key="key">
        <img :src="getImgUrl(img)" class="pic" alt="pic" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: {
    NavBar,
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
.photo-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 10px;
  height: 300px;
}
.pic {
  height: auto;
  width: auto;
}
</style>