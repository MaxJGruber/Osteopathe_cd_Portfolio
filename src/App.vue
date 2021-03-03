<template>
  <router-view id="app">
    <v-app>
      <Home />
    </v-app>
  </router-view>
</template>

<script>
import Home from "../src/views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* MANUAL ENTRIES */

.bg-logo-blue {
  background-color: #3abfd6;
}

.bg-logo-blue-nohover {
  background-color: #3abfd6;
}

.bg-logo-blue-light {
  background-color: #c3f3fc;
}
.bg-logo-gray {
  background-color: #21556d;
}

.bg-logo-gray-nohover {
  background-color: #21556d;
}

.text-logo-blue {
  color: #3abfd6;
}

.text-logo-gray {
  color: #21556d;
}
.bg-logo-blue:hover {
  --tw-bg-opacity: 1;
  background-color: #21556d;
}

.bg-logo-blue-light:hover {
  background-color: #91bdd1;
  color: white;
}
.bg-logo-gray:hover {
  --tw-bg-opacity: 1;
  background-color: #3abfd6;
}

/* ------------------------------------------------- */
</style>
