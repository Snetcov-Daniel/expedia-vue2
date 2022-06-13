<template>
  <div class="gallery">
    <div class="title">
      <h1 class="title">{{ Title }}</h1>
    </div>
    <div class="pictures">
      <div class="grid">
        <div class="grid-row">
          <img alt="Moraine Lake" src="@/img/gallery-pic1.jpg" />
          <div class="wrap">
            <p>{{ Destinations[0].title }}</p>
            <p>{{ Destinations[0].location }}</p>
          </div>
        </div>
        <div class="grid-col">
          <img alt="Cappadocia" src="@/img/gallery-pic2.jpg" />
          <div class="wrap">
            <p>{{ Destinations[1].title }}</p>
            <p>{{ Destinations[1].location }}</p>
          </div>
        </div>
        <div class="grid-col">
          <img alt="Ubud" src="@/img/gallery-pic3.jpg" />
          <div class="wrap">
            <p>{{ Destinations[2].title }}</p>
            <p>{{ Destinations[2].location }}</p>
          </div>
        </div>
        <div class="grid-cell">
          <img alt="Hokokuji Bamboo Forest" src="@/img/gallery-pic4.jpg" />
          <div class="wrap">
            <p>{{ Destinations[3].title }}</p>
            <p>{{ Destinations[3].location }}</p>
          </div>
        </div>
        <div class="grid-cell">
          <img alt="Kirkjufell" src="@/img/gallery-pic5.jpg" />
          <div class="wrap">
            <p>{{ Destinations[4].title }}</p>
            <p>{{ Destinations[4].location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main-gallery",
  data() {
    return {
      Title: "Top Most Popular Destinations",
      Destinations: [
        { title: "Moraine Lake", location: "Alberta, Canada" },
        { title: "Cappadocia", location: "Anatolia, Turkey" },
        { title: "Ubud", location: "Bali, Indonesia" },
        { title: "Kirkjufell", location: "Grundarfjordur's, Iceland" },
        { title: "Hokokuji Bamboo Forest", location: "Kamakura, Japan" },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.gallery {
  font-family: "Poppins", sans-serif;
  margin-top: 147px;
  max-width: 90%;
  display: flex;
  margin: auto;
  margin-top: 147px;
  margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;

  .title {
    color: #fff;
    margin-bottom: 20px;
  }

  .grid {
    border-radius: 5px;
    margin: 1px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
    grid-gap: 34px 34px;
    box-sizing: border-box;
    position: relative;
    width: auto;
    height: auto;

    .wrap {
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 2em;
      bottom: 2em;
      width: auto;
      height: auto;
      p {
        color: white;
        font-size: 22px;
        line-height: 33px;
      }
    }

    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .grid-row {
      position: relative;
      grid-column: span 2;
    }

    .grid-col {
      position: relative;
      grid-row: span 2;
    }

    .grid-cell {
      position: relative;
      grid-column: span 1;
      grid-row: span 1;
    }
  }
}
</style>
