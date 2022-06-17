<template>
    <form action="#" class="tab__content-item tab-item">
        <div class="tab-item__inputs">
            <div class="tab-item__inputs-places place-inputs">
                <input type="text" class="place-input place-to tab-input" placeholder="to">
            </div>
            <div class="tab-item__inputs-date date-inputs">
                <input type="date" class="date-input tab-input" />
                <input type="date" class="date-input tab-input" />
            </div>
        </div>
        <button type="submit" @submit.prevent class="tab-item__button">
            Search
        </button>
    </form>
</template>

<script>
export default {
    name: 'TabThings',

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
.tab-item__inputs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.place-inputs {
    position: relative;
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