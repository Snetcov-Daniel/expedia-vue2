<template>
    <div class="app">
        <headerMain />
        <app-travel @name="getInput" v-if="this.getLogValue(this.logState)"/>
        <appPageMain :inputValue="this.inputValue" v-if="this.getLogValue(this.logState)"/>
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
import headerMain from "./components/Header/HeaderMain";
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
    },
    data() {
        return {
            inputValue: null,
            logState : localStorage.getItem("loggedState")
        }
    },
    mounted() {

     },
     methods: {
         getLogValue(element){
             if(element === "true"){
                 return true
             }else if(element === "false"){
                 return false
             }else return false
         },
        getInput(value) {
            this.inputValue = value
            console.log(this.inputValue)
            return value
        }
     },
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

</style>
