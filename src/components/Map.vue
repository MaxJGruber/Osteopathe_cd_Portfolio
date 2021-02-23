<template>
  <div class="map-frame">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coordinatesCabinet"
      :zoom="15"
    >
      <MglMarker :coordinates="coordinatesCabinet" color="blue" />
      <MglMarker :coordinates="coordinatesBusMarche" color="yellow" />
      <MglMarker :coordinates="coordinatesBusMediatheque" color="yellow" />
      <MglMarker :coordinates="coordinatesTrain" color="yellow" />
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
      coordinatesCabinet: [2.8800294692906894, 48.95519468914018],
      coordinatesBusMarche: [2.8791945681925313, 48.955286120169596],
      coordinatesBusMediatheque: [2.879068776900545, 48.95482287309044],
      coordinatesTrain: [2.873683316474508, 48.95734050799616],
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>
<style>
.map-frame {
  height: 85%;
  width: 85%;
  border: 2px indigo solid;
}
</style>