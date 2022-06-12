<template>
  <div class = "header-navbar">

    <img src="../assets/h_logo.svg" alt="Logo">

    <div class="h__menu">
      <a href="#" id = "hm__home">Home</a>
      <a href="#" id = "hm__trips">Trips</a>
      <a href="#" id = "hm__about">About</a>
      <a href="#" id = "hm__support">Support</a>
      <a href="#" id = "hm__travel">Travel</a>
    </div>

    <div class="h__enter">
      <div class="he__register">
        <a href="#" class = "he__link">Register</a>
      </div>
      <div class="he__login">
        <a href="#" class = "he__link">Sign In</a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Header-Navbar"
}
</script>

<style scoped>
.h__enter{
  display: flex;
  width: 21%;
  justify-content: space-between;
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
