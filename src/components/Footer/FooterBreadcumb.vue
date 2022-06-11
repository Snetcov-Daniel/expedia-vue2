<template>
    <div class="footer__breadcumb">
        <a :href="link">
            <img :src="src" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: "Footer-Breadcumb",
    props: {
        link: String,
        src: String
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
    .footer__breadcumb {
        width: fit-content;
    }
</style>