<template>
    <form action="#" class="tab__content-item tab-item">
        <div class="tab-item__select">
            <div class="tab-item__select-items select-packages">
                <div class="select-package" v-for="(item, index) in packages" :key="index"
                    @click="changePackage($event)">{{ item }}</div>
            </div>
        </div>
        <div class="tab-item__content">
            <div class="tab-item__content-tab default-tab" v-if="currentPackage === -1">
                <img src="@/img/loop.png" alt="" class="default-tab__image">
                <p class="default-tab__title">Please select one or more items</p>
                <p class="default-tab__subtitle">To start building your trip, choose one or more items</p>
            </div>
            <tab-stays v-if="currentPackage === 0" />
            <tab-flight v-if="currentPackage === 1" />
            <tab-cars v-if="currentPackage === 2" />
            <div class="tab-item__content-tab" v-if="currentPackage === 3">
                <div class="tab-item__inputs">
                    <div class="tab-item__inputs-places place-inputs">
                        <input type="text" class="place-input place-from tab-input" placeholder="from">
                        <input type="text" class="place-input place-to tab-input" placeholder="to" />
                    </div>
                    <div class="tab-item__inputs-date date-inputs">
                        <input type="date" class="date-input tab-input" />
                        <input type="date" class="date-input tab-input" />
                    </div>
                </div>
                <button type="submit" @submit.prevent class="tab-item__button">
                    Search
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import TabStays from "./TabStays";
import TabFlight from "./TabFlight";
import TabCars from ".//TabCars";

export default {
    name: 'TabPackages',
    components: {
        tabStays: TabStays,
        tabFlight: TabFlight,
        tabCars: TabCars,
    },
    data() {
        return {
            packages: ['Add a stay', 'Add a flight', 'Add a car'],
            currentPackage: -1
        };
    },

    mounted() {
        
    },

    methods: {
        changePackage(event) {
            const packageLinks = document.querySelectorAll('.select-package');
            const stay = packageLinks[0];
            const flight = packageLinks[1];
            const car = packageLinks[2]
            event.target.classList.toggle('active');
            switch (true) {
                case stay.classList.contains('active') && flight.classList.contains('active') && car.classList.contains('active'): {
                    this.currentPackage = 3;
                }
                    break;
                case stay.classList.contains('active') && flight.classList.contains('active'): {
                    this.currentPackage = 3;
                }
                    break;
                case flight.classList.contains('active') && car.classList.contains('active'): {
                    this.currentPackage = 3;
                }
                    break;
                case car.classList.contains('active'): {
                    this.currentPackage = 2;
                }
                    break;
                case flight.classList.contains('active'): {
                    this.currentPackage = 1;
                }
                    break;
                case stay.classList.contains('active'): {
                    this.currentPackage = 0;
                }
                    break;
            
                default:
                    this.currentPackage = -1
                    break;
            }
        }
    },
};
</script>

<style scoped>







.select-packages {
    display: flex;
    margin-bottom: 30px;
    user-select: none;
}
.select-package {
    padding: 10px 15px;
    border: 1px solid #202020;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
}
.select-package.active {
    color: #fff;
    border: 2px solid #202020;
    background-color: #1f4aa8;
}
.default-tab {
    text-align: center;
}
.default-tab__image {
    width: 40px;
    height: 40px;
}
.default-tab__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}
.tab-item__inputs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.place-inputs,
.data-inputs {
    display: flex;
    justify-content: space-between;
}
.place-inputs {
    position: relative;
    width: 700px;
}
.place-inputs::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 5px;
    width: 40px;
    height: 24px;
    background: url("@/img/plane-from.png");
    background-size: 40px 24px;
}
.place-inputs::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 360px;
    width: 40px;
    height: 24px;
    background: url("@/img/plane-to.png");
    background-size: 40px 24px;
}
.place-input {
    display: block;
    width: 345px;
    padding: 0 20px 0 65px;
    font-size: 15px;
}
.date-inputs {
    width: 390px;
}
.date-input {
    width: 190px;
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