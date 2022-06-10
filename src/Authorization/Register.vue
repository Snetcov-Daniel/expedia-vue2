<template>
    <div class="popup">
        <div class="authorization">
            <button class="authorization__close"><img src="../assets/close-button.png" alt="Close" class="authorization__close-image"></button>
            <h1 class="authorization__title">Registration</h1>
            <form class="authorization__form">
                <input v-model="login" type="text" class="authorization__input" placeholder="Login" spellcheck="false" required>
                <input v-model="password" type="password" class="authorization__input" placeholder="Password" spellcheck="false" required>
                <input v-model="confirmPassword" type="password" class="authorization__input" placeholder="Confirm password" spellcheck="false" required>
                <input type="submit" class="authorization__submit" value="Register" @click.prevent="logIn">
            </form>
            <p class="authorization__switch-log">Login</p>
            <div class="authorization__image"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App-Register",
    data() {
        return {
            login: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        logIn() {
            if (this.confirmPassword === this.password) {
                console.log("Login: ", this.login)
                console.log("Password: ", this.password)
            } else {
                console.log("Incorrect password")
            }
        }
    }
}
</script>

<style scoped>
    .authorization {
        height: 575px;
    }
    .authorization__switch-log {
        margin-top: 560px;
    }
</style>
