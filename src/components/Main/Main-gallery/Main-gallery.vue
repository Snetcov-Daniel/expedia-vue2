<template>
    <div class="gallery">
        <div class="title">
            <h1 class="title">{{ Title }}</h1>
        </div>
        <div class="pictures">
            <div class="grid">
                <div class="grid-row">
                    <img alt="Moraine Lake" :src="ImageSources[0].src"/>
                    <div class="wrap">
                        <p>{{ Destinations[0].title }}</p>
                        <p>{{ Destinations[0].location }}</p>
                    </div>
                </div>
                <div class="grid-col">
                    <img alt="Cappadocia" :src="ImageSources[1].src"/>
                    <div class="wrap">
                        <p>{{ Destinations[1].title }}</p>
                        <p>{{ Destinations[1].location }}</p>
                    </div>
                </div>
                <div class="grid-col">
                    <img alt="Ubud" :src="ImageSources[2].src"/>
                    <div class="wrap">
                        <p>{{ Destinations[2].title }}</p>
                        <p>{{ Destinations[2].location }}</p>
                    </div>
                </div>
                <div class="grid-cell">
                    <img alt="Hokokuji Bamboo Forest" :src="ImageSources[3].src"/>
                    <div class="wrap">
                        <p>{{ Destinations[3].title }}</p>
                        <p>{{ Destinations[3].location }}</p>
                    </div>
                </div>
                <div class="grid-cell">
                    <img alt="Kirkjufell" :src="ImageSources[4].src"/>
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
                {title: "Moraine Lake", location: "Alberta, Canada"},
                {title: "Cappadocia", location: "Anatolia, Turkey"},
                {title: "Ubud", location: "Bali, Indonesia"},
                {title: "Kirkjufell", location: "Grundarfjordur's, Iceland"},
                {title: "Hokokuji Bamboo Forest", location: "Kamakura, Japan"},
            ],
            ImageSources: [
                {src: "", id: 1},
                {src: "", id: 2},
                {src: "", id: 3},
                {src: "", id: 4},
                {src: "", id: 5},
            ]
        };
    },
    mounted() {
        const keyAPI = "DDksgM2q2D86sINf54LTSRs6VrIdoExhz3sqoHB3Pqg"
        this.Destinations.forEach((item, index) => fetch(`https://api.unsplash.com/search/photos?query=${item.title.replace(/ /g, "-")}&client_id=${keyAPI}`)
            .then(response => response.json())
            .then(result => {
                this.ImageSources[index].src = result.results[0].urls.regular
                console.log(this.ImageSources[index].src)
            }))
    }
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
        border-radius: 14px;
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
            border-radius: 14px;
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
