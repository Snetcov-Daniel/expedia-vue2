<template>
    <div class="app">
        <header-main></header-main>
        <app-travel/>
        <app-footer/>
        <app-login/>
        <app-register/>
    </div>
</template>

<script>

import Footer from "./components/Footer/Footer";
import Authorize from "./components/Authorization/Authorize";
import Register from "./components/Authorization/Register";
import headerMain from "@/Header/HeaderMain";
import Travel from "./components/Travel/Travel.vue";

export default {
    name: "App",
    components: {
        appTravel: Travel,
        appFooter: Footer,
        appLogin: Authorize,
        appRegister: Register,
      headerMain: headerMain
    }
}
</script>

<style>

    * {
        font-family: Montserrat, sans-serif;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    .popup {
        display: none;
    }
</style>
