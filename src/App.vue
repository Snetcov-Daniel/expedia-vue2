<template>
    <div class="app">
        <headerMain />
        <app-travel/>
        <appPageMain />
        <app-footer/>
        <app-login/>
        <app-register/>
    </div>
</template>

<script>

import Footer from "./components/Footer/Footer";
import Authorize from "./components/Authorization/Authorize";
import Register from "./components/Authorization/Register";
import PageMain from "./components/Main/Main.vue";
import headerMain from "@/Header/HeaderMain";
import Travel from "./components/Travel/Travel.vue";


export default {
    name: "App",
    components: {
        appTravel: Travel,
        appFooter: Footer,
        appLogin: Authorize,
        appRegister: Register,
        appPageMain: PageMain,
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

    .app {
        background-color: #222831;
    }

    .popup {
        display: none;
    }
</style>
