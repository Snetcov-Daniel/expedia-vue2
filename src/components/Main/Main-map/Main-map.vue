<template>
  <div>

    <div id="map" class="map"></div>
    <div class="fakeMisterio" v-on:click="getInput()" ></div>
  </div>
</template>

<script>
import { Marker } from 'mapbox-gl';



export default {
  name: "Main-map",
  props: {
    inputValue: Promise,
  },
  data() {
    return {
      topFive: [],
    };
  },
  computed: {
  },
  components: {
  },
  mounted() {
    // eslint-disable-next-line no-undef
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YW5lciIsImEiOiJjbDRiN2pqNm4wbmR4M2NwYnFlZ2M4aWFxIn0.CZ0KGSYALL5MYlVCDOSnUA'

    // eslint-disable-next-line no-undef
    new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ 4, 50.50],
        zoom: 6.5,
    });

  },
  updated() {
  },
  methods: {
    getInput() {
      
      this.inputValue.then((data) => {
        
        let res = data.map((item) => { 
        return {
        lat: item.place.lat,
        lng: item.place.lng
       } 
      })
      this.topFive = res

      // eslint-disable-next-line no-undef
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ 4 , 50.50],
        zoom: 6,
    });

      new Marker()
      .setLngLat([this.topFive[0].lng, this.topFive[0].lat])
      .addTo(map);  

      new Marker()
      .setLngLat([this.topFive[2].lng, this.topFive[2].lat])
      .addTo(map);  

      new Marker()
      .setLngLat([this.topFive[3].lng, this.topFive[3].lat])
      .addTo(map);  

      new Marker()
      .setLngLat([this.topFive[4].lng, this.topFive[4].lat])
      .addTo(map);  

      new Marker()
      .setLngLat([this.topFive[5].lng, this.topFive[5].lat])
      .addTo(map);  

      })
      
    }
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

.fakeMisterio {
  width: 350px;
  height: 80px;
  position: absolute;
  background-color: transparent;
  left: 50%;
  right: 50%;
  top: 45em;
  cursor: pointer;
}
</style>
