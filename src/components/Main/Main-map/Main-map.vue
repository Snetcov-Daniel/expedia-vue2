<template>
  <div>
  <div id="map" class="map"></div>
  <button @click="dataReceived()" >Submit</button>
  </div>
</template>

<script>
//To use Mapbox and MglMap&MglGeojsonLayer you need to install dependencies
//npm install npm --save vue-mapbox mapbox-gl

export default {
  name: "Main-map",
  data() {
    return {
      gotData: localStorage.getItem('inputValue'),
    };
  },
  created() {
  },
  mounted() {
    // eslint-disable-next-line no-undef
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YW5lciIsImEiOiJjbDRiN2pqNm4wbmR4M2NwYnFlZ2M4aWFxIn0.CZ0KGSYALL5MYlVCDOSnUA'

    // eslint-disable-next-line no-undef
    new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ 28.85, 47.0],
        zoom: 12,
    });
  },
  destroyed() {
    
  },
  methods: {
    dataReceived() {
      console.log(this.gotData)
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  margin: 0 auto;
  top: 0;
  width: 93em;
  height: 400px;
  border-radius: 0 0 20px 20px;
}
</style>
