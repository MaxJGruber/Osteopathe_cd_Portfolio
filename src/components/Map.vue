<template>
  <div class="map">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coordinates"
      :zoom="15"
    >
      <MglMarker :coordinates="coordinates" color="blue" />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2xjM3E3MmcxYzBrMm9sYnp1MW81cGs2In0.A0nMg1Jdr81usX1IZRhggQ", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      coordinates: [2.8800294692906894, 48.95519468914018],
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>
<style>
.map {
  height: 85%;
  width: 85%;
}
</style>