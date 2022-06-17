<template>
    <div class="tab-item__select-class class">
        <div class="class__info" @click="showPopup($event)">
            {{ currentClass }}
            <img src="@/img/arrow-down.png" alt="">
        </div>
        <ul class="class-popup">
            <li class="class-popup__item" v-for="(item, index) in flightClass" :key="index" @click="changeClass($event)">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TabClassPopup',

    data() {
        return {
            flightClass: ["Economy", "Premium economy", "Bussiness class", "First class"],
            currentClass: "Economy"
        };
    },

    mounted() {
        
    },

    methods: {
        showPopup(event) {
            const popup = document.querySelectorAll('.class-popup');
            popup.forEach(item => {
                if (item.parentElement === event.target.parentElement) {
                    item.classList.toggle('active');
                }
            })
        }, 
        changeClass(event) {
            let val = event.target.textContent;
            this.currentClass = val

        }
    },
};
</script>

<style scoped>





.tab-item__select-class {
    position: relative;
    padding-right: 30px;
    text-align: right;
    color: #1F4AA8;
}

.class__info {
    cursor: pointer;
    user-select: none;
}
.class__info img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.class-popup {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    text-align: left;
    color: #000;
    list-style: none;
    background-color: #fff;
    padding: 30px 0;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    z-index: 100;
    user-select: none;
}
.class-popup.active {
    display: block;
    transform: translateY(100%);
    user-select: all;
}
.class-popup__item {
    padding: 15px 20px;
    user-select: none;
}
.class-popup__item:hover {
    background-color: rgb(241, 241, 241);
    cursor: pointer;
}
</style>