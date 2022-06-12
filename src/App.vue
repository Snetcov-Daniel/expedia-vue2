<template>
    <div class="app">
        <header-main></header-main>
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

export default {
    name: "App",
    components: {
        appFooter: Footer,
        appLogin: Authorize,
        appRegister: Register,
      headerMain: headerMain
    }
}
</script>

<style>
    * {
        margin: 0;
        border: 0;
    }
    .popup {
        display: none;
    }
</style>
