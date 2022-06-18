<template>
    <div class="popup" v-if="popState" >
        <div class="authorization">
            <button class="authorization__close" @click="closePop"><img src="@/img/close-button.png" alt="Close" class="authorization__close-image"></button>
            <h1 class="authorization__title">Authorization</h1>
            <form class="authorization__form">
                <input v-model="login" type="text" class="authorization__input" placeholder="Login" spellcheck="false" required>
                <input v-model="password" type="password" class="authorization__input" placeholder="Password" spellcheck="false" required>
                <input type="submit" class="authorization__submit" value="Login" @click.prevent="logIn">
            </form>
            <p class="authorization__switch-log">Register</p>
            <div class="authorization__image"></div>
        </div>
    </div>
</template>


<script>

import axios from "axios";

export default {
    name: "App-Authorize",
    data() {
        return {
            loggedState: false,
            login: "",
            password: "",
            popState: false,
            userData:{
                login: "",
            password: "",
            imported:{},

          }
        }
    },
    watch:{
        localSave(loggedState){
            localStorage.setItem("loggedState", loggedState)
            console.log("LogState Saved")
            alert(localStorage.getItem("loggedState"))
        }
    },
    methods: {


        logIn() {
            this.userData["login"] = this.login
            this.userData["password"] = this.password

            this.imported = axios.get("http://localhost:3000/users\n")
            this.imported.then((item)=>{
                try {
                    item.data.forEach((item) => {
                        if (item.login === this.login && item.password === this.password) {
                            console.log("success")
                            this.loggedState = true
                            localStorage.setItem("loggedState", this.loggedState)
                            console.log("LogState Saved")
                            // alert(localStorage.getItem("loggedState"))
                            window.location.reload();

                            this.popState = false


                            throw 'Break'

                        } else {
                            console.log("failure")
                        }
                    })
                }catch(e){
                    console.log(e)
                }
            })
            },

      openPop(){
        this.popState = true
        console.log("OpenPopWorks, popState: " , true)
      },
      closePop(){
        this.popState = false
        console.log("ClosePopWorks, popState: " , false)
      }

    }
}
</script>

<style>
    .popup {
      z-index: 9000;

      position: absolute;
        top: 0;
      left: 0;
        height: 120vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      margin: auto;
    }

    .authorization {
      display: flex;
        font-family: "Montserrat", sans-serif;
      margin:auto;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        position: relative;
        width: 800px;
        height: 570px;
        padding-bottom: 35px;
        border-radius: 35px 35px 30px 30px;
        background-color: #222831;
      margin-top: 100px;
    }
    .authorization__close {
        position: absolute;
        border: 0;
        background-color: #ffffff;
        height: 60px;
        width: 60px;
        border-radius: 30px 0 30px 0;
        outline: 0;
        left: 0;
    }
    .authorization__close-image {
        width: 26px;
        height: 26px;
    }
    .authorization__title {
        position: absolute;
        margin: 100px;
        font-style: normal;
        font-weight: 700;
        font-size: 62px;
        line-height: 76px;
        color: #FFFFFF;
    }
    .authorization__form {
        font-family: "Montserrat", sans-serif;
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 250px;
    }
    .authorization__input {
        font-family: "Montserrat", sans-serif;
        background-color: rgba(0,0,0,0);
        outline: 0;
        border-radius: 10px;
        border: 2px solid #ffffff;
        padding: 15px;
        width: 555px;
        margin-bottom: 23px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 16px;
    }
    .authorization__input::placeholder {
        font-family: "Montserrat", sans-serif;
        color: #FFFFFF;
    }
    .authorization__submit {
        font-family: "Montserrat", sans-serif;
        color: #FFFFFF;
        background-color: #1F4AA8;
        padding: 23px 0;
        border-radius: 35px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
    }
    .authorization__switch-log {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        position: absolute;
        margin-top: 485px;
        text-decoration: underline;
        color: #FFFFFF;
        cursor: pointer;
        user-select: none;
    }
    .authorization__image {
        width: 100%;
        height: 100%;
        /*background: linear-gradient(180deg, rgba(34, 40, 49, 0) 0%, #222831 55%), url("@/img/background.png");*/
        background: linear-gradient(180deg, rgba(34, 40, 49, 0) 0%, #222831 55%), url("@/img/background.png");
        background-color: #222831;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 30px;
    }
</style>
