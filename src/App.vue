<template>
    <div class="app">
        <app-login></app-login>
        <app-register></app-register>
    </div>
</template>

<script>

import Authorize from "@/Authorization/Authorize";
import Register from "@/Authorization/Register";

export default {
    name: "App",
    components: {
        appLogin: Authorize,
        appRegister: Register
    }
}
</script>

<style>
    * {
        margin: 0;
        border: 0;
    }
</style>
