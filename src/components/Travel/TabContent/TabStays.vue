<template>
    <form action="#" class="tab__content-item tab-item">
        <div class="tab-item__select">
            <div class="tab-item__select-popups">
                <tab-conditions />
                <tab-class />
            </div>
        </div>
        <div class="tab-item__inputs">
            <div class="tab-item__inputs-places place-inputs">
                <input type="text" class="place-input place-to tab-input" placeholder="to">
            </div>
            <div class="tab-item__inputs-date date-inputs">
                <input type="date" class="date-input tab-input" />
                <input type="date" class="date-input tab-input" />
            </div>
        </div>
        <div class="tab-item__checkboxes">
            <div class="checkbox" @click="addNewFlight = !addNewFlight" v-bind:class="{active: addNewFlight}">
                Add a flight
            </div>
            <div class="checkbox" @click="$event.target.classList.toggle('active')">
                Add a car
            </div>
        </div>
        <div class="tab-item__inputs">
            <div class="tab-item__inputs-places place-inputs" v-show="addNewFlight">
                <input type="text" class="place-input place-from tab-input" placeholder="from">
            </div>
        </div>
        <button type="submit" @submit.prevent class="tab-item__button">
            Search
        </button>
    </form>
</template>

<script>

import TabConditionsPopup from "./TabPopups/TabConditionsPopup";
import TabClassPopup from "./TabPopups/TabClassPopup";

export default {
    name: 'TabStays',
    components: {
        tabConditions: TabConditionsPopup,
        tabClass: TabClassPopup,
    },
    data() {
        return {
            addNewFlight: false
        };
    },

    mounted() {

    },

    methods: {
        
    },
};
</script>

<style scoped>


.tab-item__select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.tab-item__select-popups {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.tab-item__inputs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.place-inputs {
    position: relative;
    width: 600px;
    margin-right: 10px;
}
.place-inputs::before {
    content: "";
    position: absolute;
    top: 13px;
    left: 15px;
    width: 24px;
    height: 24px;
    background: url("@/img/pin.png");
    background-size: 24px 24px;
}
.place-input {
    display: block;
    width: 600px;
    padding: 0 20px 0 65px;
    font-size: 15px;
}
.date-inputs {
    width: 480px;
}
.date-input {
    width: 235px;
}
.date-input:last-child {
    margin-right: 0;
}
.tab-input {
    height: 50px;
    border: 1px solid rgb(95, 95, 95);
    border-radius: 8px;
    margin: 0 10px 10px 0;
}
.checkbox {
    display: inline-block;
    position: relative;
    padding-left: 40px;
    margin: 0 40px 20px 0;
    user-select: none;
    cursor: pointer;
}
.checkbox::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid silver;
    border-radius: 4px;
}
.checkbox.active::before {
    background-color: #1f4aa8;
    background-image: url('@/img/checkmark.png');
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: center;
}
.tab-item__button {
    display: block;
    height: 60px;
    width: 250px;
    padding: 10px 20px;
    background-color: #1f4aa8;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border-radius: 40px;
    cursor: pointer;
}

</style>