<template>
    <div class="header-main">
        <header-navbar></header-navbar>
        <header-offer></header-offer>
    </div>

</template>

<script>
import headerNavbar from "./HeaderNavbar.vue";
import headerOffer from "./HeaderOffer.vue";

export default {

    name: "HeaderMain",
    components: {headerOffer, headerNavbar},
    comments: {
        headerOffer,
        headerNavbar
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
.header-main {
    background: linear-gradient(180deg, rgba(34, 40, 49, 0) 76.09%, #222831 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("../../img/header-bg.png");
    background-size: cover;
    width: 100%;
    height: 565px;
    padding-top: 35px;
    margin: 0;
}


</style>
