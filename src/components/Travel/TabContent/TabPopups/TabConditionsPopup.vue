<template>
    <div class="tab-item__select-conditions conditions">
        <div class="conditions__info" @click="showPopup">
            {{ roomsCounter }} rooms, {{ peopleCounter }} travelers
            <img src="@/img/arrow-down.png" alt="">
        </div>
        <div class="conditions-popup">
            <div class="conditions-popup__item conditions-item">
                <div class="conditions-item__title">Room 1</div>
                <div class="conditions-item__people">
                    <div class="conditions-item__adult">
                        Adults
                        <div class="conditions-item__counter people-counter">
                            <button class="people-counter__minus people-counter__btn not-active"
                                @click="decreasePeople($event, 0)">-</button>
                            <span class="people-counter__value">0</span>
                            <button class="people-counter__plus people-counter__btn"
                                @click="increasePeople($event, 0, 12)">+</button>
                        </div>
                    </div>
                    <div class="conditions-item__child">
                        Children
                        <div class="conditions-item__counter people-counter">
                            <button class="people-counter__minus minus-child people-counter__btn not-active"
                                @click="decreasePeople($event, 1); removeChild($event)">-</button>
                            <span class="people-counter__value">0</span>
                            <button class="people-counter__plus plus-child people-counter__btn"
                                @click="increasePeople($event, 1, 6); addChild($event)">+</button>
                        </div>
                    </div>
                </div>
                <div class="condition-item__inputs condition-inputs">
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                    <select name="" id="" class="condition-inputs__child">
                        <option value="" v-for="(n, index) in optionNumber" :key="index"> {{ n+1 }} </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabConditionsPopup',
    data() {
        return {
            roomsCounter: 1,
            peopleCounter: 0,
            optionNumber: 16,
            selectIndex: 0,
        };
    },
    mounted() {
    },
    methods: {
        showPopup() {
            const popup = document.querySelector('.conditions-popup');
            popup.classList.toggle('active');
            popup.style.bottom = -popup.offsetHeight;
        },
        increasePeople(event, index, maxPeople) {
            const peopleNumber = document.querySelectorAll('.people-counter__value');
            const minus = document.querySelectorAll('.people-counter__minus');
            let val = Number(peopleNumber[index].textContent);
            minus[index].classList.remove('not-active');
            if (val === maxPeople - 1) {
                event.target.classList.add('not-active');
                val++;
                peopleNumber[index].textContent = val;
                return;
            } else if (val > maxPeople - 1) {
                return;
            }
            val++;
            peopleNumber[index].textContent = val;
        },
        decreasePeople(event, index) {
            const peopleNumber = document.querySelectorAll('.people-counter__value');
            const plus = document.querySelectorAll('.people-counter__plus');
            let val = Number(peopleNumber[index].textContent);
            plus[index].classList.remove('not-active');
            if (val === 1) {
                event.target.classList.add('not-active');
                val--;
                peopleNumber[index].textContent = val;
                return;
            } else if (val < 1) {
                return;
            }
            val--;
            peopleNumber[index].textContent = val;
        },
        // toggleChild(event) {
        //     const select = document.querySelectorAll('.condition-inputs__child');
        //     console.log(this.selectIndex);
        //     if (event.target.classList.contains('plus-child')) {
        //         select[this.selectIndex].classList.add('active')
        //         this.selectIndex++;
        //     } else if (event.target.classList.contains('minus-child')) {
        //         select[this.selectIndex].classList.remove('active')
        //         this.selectIndex--;
        //     }
        // },
        addChild() {
            const select = document.querySelectorAll('.condition-inputs__child');
            if (this.selectIndex < 6) {
                select[this.selectIndex].classList.add('active');
                this.selectIndex++;
                console.log(this.selectIndex);
            } else if (this.selectIndex === 6) {
                select[this.selectIndex].classList.add('active');
            } 
        },
        removeChild() {
            const select = document.querySelectorAll('.condition-inputs__child');
            if (this.selectIndex >= 1) {
                this.selectIndex--;
                select[this.selectIndex].classList.remove('active');
                console.log(this.selectIndex);
            }
        }
    },
};
</script>

<style scoped>


.tab-item__select-conditions {
    position: relative;
    padding-right: 30px;
    text-align: right;
    color: #1F4AA8;
    margin-right: 20px;
}
.conditions__info {
    cursor: pointer;
    user-select: none;
}
.conditions__info img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.conditions-popup {
    visibility: hidden;
    position: absolute;
    right: 0;
    width: 400px;
    text-align: left;
    color: #000;
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    z-index: 100;
    user-select: none;
}
.conditions-popup.active {
    visibility: visible;
    user-select: all;
}
.conditions-item {
    display: block;
    margin: 40px;
}
.conditions-item__title {
    margin-bottom: 10px;
}
.conditions-item__inner {
    margin-bottom: 30px;
}
.conditions-item__adult, .conditions-item__child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}
.people-counter {
    user-select: none;
}
.people-counter__btn {
    height: 40px;
    width: 40px;
    font-size: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
}
.people-counter__btn.not-active {
    color: #ccc;
    border: 1px solid #ccc;
    user-select: none;
}
.people-counter__value {
    display: inline-block;
    width: 20px;
    text-align: center;
}
.condition-inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.condition-inputs__child {
    display: none;
    width: 120px;
    height: 40px;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 10px;
    margin-bottom: 20px;
}
.condition-inputs__child.active {
    display: block;
}
.condition-inputs__child option {
    width: 120px;
    height: 30px;
}

</style>