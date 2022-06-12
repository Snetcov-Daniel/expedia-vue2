<template>
  <div class="header-main">
    <header-navbar></header-navbar>
    <header-offer></header-offer>
  </div>

</template>

<script>
import headerNavbar from "@/Header/HeaderNavbar";
import headerOffer from "@/Header/HeaderOffer";
import HeaderNavbar from "@/Header/HeaderNavbar";
import HeaderOffer from "@/Header/HeaderOffer";
export default {

  name: "HeaderMain",
  components: {HeaderOffer, HeaderNavbar},
  comments: {
    headerOffer,
    headerNavbar
  }
}
</script>

<style scoped>
.header-main{
  background-image: url("../assets/header-bg.png");
  background-size: 100% 100%;
  width: 100%;
  height: 565px;
  padding-top: 35px;
  margin:0;

}


</style>
