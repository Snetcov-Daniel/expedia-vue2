<template>
  <div class="main">
    <main-map :inputValue="this.inputValue" ></main-map>
    <main-gallery></main-gallery>
  </div>
</template>

<script>
import mainMap from "./Main-map/Main-map.vue";
import MainGallery from './Main-gallery/Main-gallery.vue';

export default {
  name: "PageMain",
  components: {
    mainMap: mainMap,
    mainGallery: MainGallery,
  },
  props: {
    inputValue: Promise,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: { },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #222831;
  height: auto;
}
</style>