<template>
  <div>
    <h1>Photo Gallery</h1>
    <div class="photo-grid">
      <div v-for="(img, key) in photos" :key="key">
        <img :src="img" class="pic" alt="pic" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "src/assets/photo-gallery/shooting1.jpg",
        "../assets/Ostheo1.jpg",
      ],
    };
  },
};
</script>

<style>
.photo-grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  height: 300px;
}
.pic {
  height: 100px;
  width: 100px;
}
</style>