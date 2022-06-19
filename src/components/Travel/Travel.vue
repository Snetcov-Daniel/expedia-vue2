<template>
    <div class="travel tab">
        <ul class="tab__links">
            <li v-for="(item, index) in tabLinks" :key="index" class="tab__link" @click="tabLinksChange($event, index)"> {{ item }} </li>
        </ul>
        <div class="tab__content">
            <tab-stays v-if="tab === 0"/>
            <tab-flight @name="getInput" v-if="tab === 1"/>
            <tab-cars v-if="tab === 2"/>
            <tab-packages v-if="tab === 3"/>
            <tab-things v-if="tab === 4"/>
        </div>
    </div>
</template>

<script>

import TabStays from "./TabContent/TabStays";
import TabFlight from "./TabContent/TabFlight";
import TabCars from "./TabContent/TabCars";
import TabPackages from "./TabContent/TabPackages";
import TabThings from "./TabContent/TabThings";

export default {
    name: 'App-Travel',
    components: {
        tabStays: TabStays,
        tabFlight: TabFlight,
        tabCars: TabCars,
        tabPackages: TabPackages,
        tabThings: TabThings,
    },
    data() {
        return {
            tabLinks: ['Stays', 'Flight', 'Cars', 'Packages', 'Things to do'],
            tab: 1
        };
    },

    mounted() {
        const tabs_links = document.querySelectorAll('.tab__link');
        tabs_links[this.tab].classList.add('active');
    },

    methods: {
        tabLinksChange(e, index) {
            this.tab = index;
            const tabs_links = document.querySelectorAll('.tab__link');
            tabs_links.forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
        },
        getInput(value) {
            this.$emit('name', value)
            console.log(value)
        }
    },
};
</script>

<style scoped>


    .travel {
        width: 1240px;
        margin: -50px auto 0;
        padding: 24px 44px;
        border-radius: 30px;
        background-color: #fff;
    }
    .tab__links {
        padding: 0;
        border-bottom: 1px solid #888AA2;
        margin-bottom: 30px;
        user-select: none;
    }
    .tab__links li {
        display: inline-block;
        position: relative;
        list-style: none;
        color: #888AA2;
        padding-bottom: 10px;
        margin-right: 50px;
        transform: translateY(2px);
        cursor: pointer;
    }
    .tab__links li.active {
        border-bottom: 3px solid #1F4AA8;
    }
    .tab__content-item {
        display: block;
        padding: 0 25px;
    }
</style>