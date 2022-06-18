<template>
    <div class="travel tab">
        <ul class="tab__links">
            <li v-for="(item, index) in tabLinks" :key="index" class="tab__link" @click="tabContentChange($event, index)"> {{ item }} </li>
        </ul>
        <div class="tab__content">
            <tab-stays/>
            <tab-flight @name="getInput"/>
            <tab-cars/>
            <tab-packages/>
            <tab-things/>
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
        tabThings: TabThings
    },
    data() {
        return {
            tabLinks: ['Stays', 'Flight', 'Cars', 'Packages', 'Things to do']
        };
    },

    mounted() {
        const tabs_links = document.querySelectorAll('.tab__link');
        const tabs_content = document.querySelectorAll('.tab__content-item');
        tabs_content[1].classList.add('active')
        tabs_links[1].classList.add('active');
    },

    methods: {
        tabContentChange(e, index) {
            const tabs_links = document.querySelectorAll('.tab__link');
            const tabs_content = document.querySelectorAll('.tab__content-item');
            tabs_links.forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
            tabs_content.forEach(tab => {
                tab.classList.remove('active');
            });
            tabs_content[index].classList.add('active')
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
        display: none;
        padding: 0 25px;
    }
    .tab__content-item.active {
        display: block;
    }
</style>