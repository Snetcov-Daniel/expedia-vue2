<template>
  <div class = "header-navbar">
    <img src="../../img/Expedia-logo.png" alt="Logo">
    <div class="h__menu">
      <a href="#" id = "hm__home">Home</a>
      <a href="#" id = "hm__trips">Trips</a>
      <a href="#" id = "hm__about">About</a>
      <a href="#" id = "hm__support">Support</a>
      <a href="#" id = "hm__travel">Travel</a>
    </div>

    <div class="h__enter">
      <div v-if="!(this.getLogValue(this.logState))" class="he__register">
        <a  href="#" class = "he__link" v-on:click="openPopReg">Register</a>
      </div>
      <div v-if="!(this.getLogValue(this.logState))" class="he__login" v-on:click="openPopLog" >
        <a href="#" class = "he__link">Sign In</a>
      </div>
        <div v-if="(this.getLogValue(this.logState))" class="he__login" v-on:click="exit">
        <a href="#" class = "he__link">Exit</a>
      </div>


    </div>

    <reg-in ref="RegistrationPopup"/>
    <log-in ref="LogInPopup"/>


  </div>
</template>




<script>
import Authorize from "@/components/Authorization/Authorize";
import Register from "@/components/Authorization/Register";

export default {
  name: "Header-Navbar",

  data(){
    return{
        logState:localStorage.getItem("loggedState")

    }
  },

  components: {
  logIn: Authorize,
    regIn: Register
  },

  methods:{

      exit(){
        localStorage.setItem("loggedState", false)
          window.location.reload();
      },

      getLogValue(element){
          if(element === "true"){
              return true
          }else if(element === "false"){
              return false
          }else return false
      },

    openPopReg(){
      this.$refs.RegistrationPopup.openPop()
    },
    openPopLog(){
      this.$refs.LogInPopup.openPop()
    }
  }

}
</script>

<style scoped>

.h__enter{
  display: flex;
  width: 21%;
  justify-content: space-between;
    flex-direction: row-reverse;
  align-items: center;
}

.he__login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 34px;

  background: #1F4AA8;
  border-radius: 39px;
}

.he__link{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  text-align: right;
  text-decoration: none;

  color: #FFFFFF;
}

.header-navbar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: auto;

  }

.h__menu{
  max-width: 433px;
  width: 35%;
  display: flex;
  justify-content: space-between;
}

.h__menu a{
  text-decoration: none;
  color: #fff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}



</style>
