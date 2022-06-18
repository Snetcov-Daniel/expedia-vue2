<template>
  <div class="offer">
    <h1>
      It Matters Who You <br>
      Travel With
    </h1>
    <span>We want you to feel confident in the travel experience you will have with us.</span>
  </div>
</template>

<script>

export default {
  name: "HeaderOffer"

}
</script>

<style scoped>

.offer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  text-align: center;
  width: 747px;
  height: 176px;
  margin: auto;
  margin-top: 120px;

  color: #FFFFFF;
}
  span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin: auto;
    margin-top: 35px;

    max-width: 790px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.055em;

    color: #FFFFFF;
  }




</style>
