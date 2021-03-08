<template>
  <div class="map-frame">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coordinatesCabinet"
      :zoom="15"
    >
      <MglMarker :coordinates="coordinatesCabinet" color="blue"></MglMarker>
      <MglMarker :coordinates="coordinatesBusMarche"
        ><img src="../assets/bus-stop.png" slot="marker" class="map-icon" />
      </MglMarker>
      <MglMarker :coordinates="coordinatesBusMediatheque"
        ><img src="../assets/bus-stop.png" slot="marker" class="map-icon"
      /></MglMarker>
      <MglMarker :coordinates="coordinatesTrain" color="yellow"
        ><img src="../assets/train-stop.png" slot="marker" class="map-icon"
      /></MglMarker>
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
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      coordinatesCabinet: [2.8800294692906894, 48.95519468914018], // coordinates for cabinet
      coordinatesBusMarche: [2.8791945681925313, 48.955286120169596], // coordinates for bus stop (MARCHE)
      coordinatesBusMediatheque: [2.879068776900545, 48.95482287309044], // coordinates for bus stop (MEDIATHEQUE)
      coordinatesTrain: [2.873683316474508, 48.95734050799616], // coordinates train stop
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
  height: 400px;
  width: 95%;
  border: 2px #3abfd6 solid;
}

.map-icon {
  width: 35px;
  height: 35px;
  opacity: 100%;
}
</style>