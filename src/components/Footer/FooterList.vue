<template>
    <div class="footer__info">
        <h4 class="footer__info-title">{{ listTitle }}</h4>
        <ul class="footer__info-list">
            <li  v-for="(item, index) in listItems" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footer-List",
    props: {
        listTitle: String,
        listItems: Array
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .footer__info-title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        text-align: left;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }

    .footer__info-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .footer__info-list > li {
        margin-top: 10px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        text-align: left;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }
</style>