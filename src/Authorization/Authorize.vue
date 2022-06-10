<template>
    <div class="popup">
        <div class="authorization">
            <button class="authorization__close"><img src="../assets/close-button.png" alt="Close" class="authorization__close-image"></button>
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
export default {
    name: "App-Authorize",
    data() {
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        logIn() {
            console.log("Login: ", this.login)
            console.log("Password: ", this.password)
        }
    }
}
</script>

<style>
    .popup {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
    .authorization {
        font-family: "Montserrat", sans-serif;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        position: relative;
        width: 800px;
        height: 510px;
        padding-bottom: 35px;
        border-radius: 35px 35px 30px 30px;
        background-color: #222831;
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
        background: linear-gradient(180deg, rgba(34, 40, 49, 0) 0%, #222831 55%), url("../assets/background.png");
        background-color: #222831;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 30px;
    }
</style>
