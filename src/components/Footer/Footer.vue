<template>
    <div class="footer">
        <div class="footer__rights">
            <img class="expedia-logo" src="@/img/Expedia-logo.png" alt="expedia logo">
            <p class="expedia-rights">© 2021 Expedia, Inc., an Expedia Group company. All rights reserved.</p>
        </div>
        <footer-list :listTitle="listTitles[0]" :listItems="listItems[0]"/>
        <footer-list :listTitle="listTitles[1]" :listItems="listItems[0]"/>
        <footer-list :listTitle="listTitles[2]" :listItems="listItems[0]"/>
        <footer-list :listTitle="listTitles[3]" :listItems="listItems[0]"/>
        <div class="footer__get-in-touch">
            <footer-list :listTitle="listTitles[4]" :listItems="listItems[1]"/>
            <div class="footer__breadcums">
                <footer-breadcumb :link="socialMedia.instagram.link" :src="socialMedia.instagram.logo"/>
                <footer-breadcumb :link="socialMedia.twitter.link" :src="socialMedia.twitter.logo"/>
                <footer-breadcumb :link="socialMedia.linkedin.link" :src="socialMedia.linkedin.logo"/>
            </div>
        </div>
    </div>
</template>

<script>

import FooterList from "./FooterList";
import FooterBreadcumb from "./FooterBreadcumb";

export default {
    name: "App-Footer",
    components: {
        footerList: FooterList,
        footerBreadcumb: FooterBreadcumb 
    },
    data() {
        return {
            socialMedia: {
                instagram: {
                    link: "https://www.instagram.com/",
                    logo: require("@/img/instagram-logo.png")
                },
                twitter: {
                    link: "https://twitter.com/",
                    logo: require("@/img/twitter-logo.png")
                },
                linkedin: {
                    link: "https://www.linkedin.com/",
                    logo: require("@/img/linkedin-logo.png")
                }
            },
            listTitles: ["Company", "Explore", "Term and Policies", "Help", "Get in touch"],
            listItems: [
                [
                    "About us",
                    "Jobs",
                    "List your property",
                    "Partnership",
                    "Advertising"
                ],
                [
                    "Question or feedback?",
                    "We'd love to hear from you"
                ]
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

    .footer {
        width: 100%;
        left: 0;
        bottom: 0;

        display: flex;
        justify-content: space-evenly;

        padding: 50px 20px;

        background: #133B5C;
    }
    .expedia-logo {
        width: 140px;
        height: 42px;
    }

    .footer__rights {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .expedia-rights {
        width: 245px;
        height: 48px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }

    .footer__get-in-touch {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .footer__breadcums {
        display: flex;
        gap: 30px;
    }
</style>