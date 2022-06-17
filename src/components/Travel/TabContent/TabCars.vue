<template>
    <form action="#" class="tab__content-item tab-item">
        <div class="tab-item__select">
            <div class="tab-item__select-tabs select-tabs">
                <div class="select-tab" v-for="(tab, index) in tabs" :key="index" @click="changeTab($event, index)">{{
                    tab }}</div>
            </div>
        </div>
        <div class="tab-item__inputs" v-show="tab === 0">
            <div class="tab-item__inputs-places place-inputs">
                <input type="text" class="place-input place-pickup tab-input" placeholder="pick up">
                <input type="text" class="place-input place-pickup tab-input" placeholder="same as pick up">
            </div>
            <div class="tab-item__inputs-date date-inputs">
                <input type="date" class="date-input tab-input" />
                <input type="date" class="date-input tab-input" />
            </div>
            <div class="tab-item__inputs-time time-inputs">
                <select name="" id="" class="time-select tab-input">
                    <option value="" v-for="(item, index) in time" :key="index">{{ item }}</option>
                </select>
                <select name="" id="" class="time-select tab-input">
                    <option value="" v-for="(item, index) in time" :key="index">{{ item }}</option>
                </select>
            </div>
        </div>
        <div class="tab-item__inputs" v-show="tab === 1">
            <div class="tab-item__inputs-places place-inputs place-inputs__airport">
                <input type="text" class="place-input place-airport tab-input" placeholder="airport">
                <input type="text" class="place-input place-airport tab-input" placeholder="hotel name">
            </div>
            <div class="tab-item__inputs-date date-inputs">
                <input type="date" class="date-input tab-input" />
            </div>
            <div class="tab-item__inputs-time time-inputs">
                <select name="" id="" class="time-select tab-input">
                    <option value="" v-for="(item, index) in time" :key="index">{{ item }}</option>
                </select>
            </div>
        </div>
        <button type="submit" @submit.prevent class="tab-item__button">
            Search
        </button>
    </form>
</template>

<script>
export default {
    name: 'TabCars',

    data() {
        return {
            tabs: ['Rental cars', 'Airport transportation'],
            time: ['12:00 am', '12:30 am', '1:00 am', '1:30 am', '2:00 am', '2:30 am', '3:00 am', '3:30 am', '4:00 am', '4:30 am', '5:00 am', '5:30 am', '6:00 am',
                '6:30 am', '7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm', 
                '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', 
                '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm',],
            tab: 0
        };
    },

    mounted() {
        const tabLinks = document.querySelectorAll('.select-tab');
        tabLinks[this.tab].classList.add('active')
    },

    methods: {
        changeTab(event, index) {
            const tabLinks = document.querySelectorAll('.select-tab');
            tabLinks.forEach(item => {
                item.classList.remove('active')
            })
            event.target.classList.add('active');
            this.tab = index;
        }
    },
};
</script>

<style scoped>












.tab-item__select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.tab-item__select-tabs {
    display: flex;
}
.select-tab {
    position: relative;
    padding-left: 30px;
    margin-right: 40px;
    cursor: pointer;
}
.select-tab::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid #1f4aa8;
    border-radius: 50%;
}
.select-tab.active::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: #1f4aa8;
    border-radius: 50%;
}
.tab-item__inputs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.tab-input {
    height: 50px;
    border: 1px solid rgb(95, 95, 95);
    border-radius: 8px;
    margin: 0 10px 10px 0;
}
.place-inputs {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 1100px;
    margin-right: 5px;
}
.place-inputs__airport {
    width: 545px !important;
}
.place-airport {
    width: 265px !important;
}
.place-inputs__airport::after {
    content: "";
    position: absolute;
    top: 13px;
    left: 290px !important;
    width: 24px;
    height: 24px;
    background: url("@/img/pin.png");
    background-size: 24px 24px;
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
.place-inputs::after {
    content: "";
    position: absolute;
    top: 13px;
    left: 565px;
    width: 24px;
    height: 24px;
    background: url("@/img/pin.png");
    background-size: 24px 24px;
}
.place-input {
    display: block;
    width: 545px;
    padding: 0 20px 0 65px;
    font-size: 15px;
}
.date-inputs {
    display: flex;
    margin-right: 10px;
}
.date-input {
    width: 265px;
    margin-right: 10px;
}
.date-input:last-child {
    margin-right: 0;
}
.time-inputs {
    display: flex;
}
.time-select {
    width: 265px;
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