<template>

    <div class="app">

          <app-login></app-login>
          <app-register></app-register>
      <header-main></header-main>

    </div>
</template>

<script>

import Authorize from "@/Authorization/Authorize";
import Register from "@/Authorization/Register";
import headerMain from "@/Header/HeaderMain";


export default {
    name: "App",
    components: {

        appLogin: Authorize,
        appRegister: Register,
        headerMain: headerMain
    }
}
</script>

<style>
    .app {
        margin: 0;
        border: 0;
      width: 100%;

      background-color: gray;
    }
    .popup{
      visibility: hidden;

    }


</style>
