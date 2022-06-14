<template>
    <div class="app">
        <headerMain />
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
import PageMain from "./components/Main/Main.vue"
import headerMain from "@/components/Header/HeaderMain.vue";

export default {
    name: "App",
    components: {
        appFooter: Footer,
        appLogin: Authorize,
        appRegister: Register,
        appPageMain: PageMain,
      headerMain: headerMain
    },
    mounted() { }
}
</script>

<style>
    * {
        margin: 0;
        border: 0;
    }

    .app {
        background-color: #222831;
    }

    .popup {
        display: none;
    }
</style>
