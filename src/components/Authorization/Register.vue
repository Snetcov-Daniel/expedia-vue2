<template>
    <div class="popup" v-if="popState">
        <div class="authorization">
            <button class="authorization__close" @click="closePop"><img src="@/img/close-button.png" alt="Close"
                                                                        class="authorization__close-image"></button>
            <h1 class="authorization__title">Registration</h1>
            <form class="authorization__form">
                <input v-model="login" type="text" class="authorization__input" placeholder="Login" spellcheck="false"
                       required>
                <input v-model="password" type="password" class="authorization__input" placeholder="Password"
                       spellcheck="false" required>
                <input v-model="confirmPassword" type="password" class="authorization__input"
                       placeholder="Confirm password" spellcheck="false" required>
                <input type="submit" class="authorization__submit" value="Register" @click.prevent="logIn">
            </form>
            <p class="authorization__switch-log">Login</p>
            <div class="authorization__image"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "App-Register",
    data() {
        return {
            login: "",
            password: "",
            confirmPassword: "",
            popState: false,
            userData: {
                login: "",
                password: ""
            }
        }
    },
    methods: {
        logIn() {
            if (this.confirmPassword === this.password) {
                this.userData["login"] = this.login
                this.userData["password"] = this.password
                axios.post('http://localhost:3000/users\n', this.userData)
                console.log("data: ", this.userData)
                this.closePop()
            } else {
                console.log("Incorrect password")
                alert("Incorrect password")
            }
        },

        openPop() {
            this.popState = true
            console.log("OpenPopWorks, popState: ", true)
        },
        closePop() {
            this.popState = false
            console.log("ClosePopWorks, popState: ", false)
        }
    }
}
</script>

<style scoped>
    .authorization {
        height: 645px;
    }
    .authorization__switch-log {
         margin-top: 560px;
    }
</style>
