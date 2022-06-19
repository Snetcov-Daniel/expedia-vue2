<template>
  <form action="#" class="tab__content-item tab-item">
    <div class="tab-item__select">
      <div class="tab-item__select-tabs select-tabs">
        <div class="select-tab" v-for="(tab, index) in tabs" :key="index" @click="changeTab($event, index)">{{ tab }}
        </div>
      </div>
      <div class="tab-item__select-popups">
        <tab-conditions />
        <tab-class />
      </div>
    </div>
    <div class="tab-item__inputs" v-if="tab === 0">
      <div class="tab-item__inputs-places place-inputs">
        <autocomplete-input @name="getInput" :data="list" :field="field"></autocomplete-input>
        <input type="text" class="place-input place-to tab-input" placeholder="to" />
      </div>
      <div class="tab-item__inputs-date date-inputs">
        <input type="date" class="date-input tab-input" />
        <input type="date" class="date-input tab-input" />
      </div>
    </div>
    <div class="tab-item__inputs" v-if="tab === 1">
      <div class="tab-item__inputs-places place-inputs">
        <input type="text" class="place-input place-from tab-input" placeholder="from">
        <input type="text" class="place-input place-to tab-input" placeholder="to" />
      </div>
      <div class="tab-item__inputs-date date-inputs">
        <input type="date" class="date-input tab-input date-departing" />
      </div>
    </div>
    <div class="tab-item__title" v-if="tab === 2">Flight 1</div>
    <div class="tab-item__inputs" v-if="tab === 2">
      <div class="tab-item__inputs-places place-inputs">
        <input type="text" class="place-input place-from tab-input" placeholder="from">
        <input type="text" class="place-input place-to tab-input" placeholder="to" />
      </div>
      <div class="tab-item__inputs-date date-inputs">
        <input type="date" class="date-input tab-input date-departing" />
      </div>
    </div>
    <div class="tab-item__title" v-if="tab === 2">Flight 1</div>
    <div class="tab-item__inputs" v-if="tab === 2">
      <div class="tab-item__inputs-places place-inputs">
        <input type="text" class="place-input place-from tab-input" placeholder="from">
        <input type="text" class="place-input place-to tab-input" placeholder="to" />
      </div>
      <div class="tab-item__inputs-date date-inputs">
        <input type="date" class="date-input tab-input date-departing" />
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
import Autocomplete from './TabPopups/TabAutocomplete.vue';
import { getContracts } from "../../../API/database/contracts";

export default {
  name: "TabFlight",
  components: {
    tabConditions: TabConditionsPopup,
    tabClass: TabClassPopup,
    autocompleteInput: Autocomplete,
  },
  data() {
    return {
      list: [],
      filteredData: [],
      field: 'name',
      dataToReturn: null,
      search: '',
      tabs: ['Roundtrip', 'One-way', 'Multy-city'],
      tab: 0
    };
  },
  created() {
    getContracts()
      .then((result) => {
        let list = result.map((obj) => obj.origin)
          .map((origin) => {
            return {
              name: origin.name,
              lat: origin.lat,
              lng: origin.lng,
            };
          });

        list = list.filter((item, index, array) =>
          index === array.findIndex((obj) =>
            obj.name === item.name
          )
        )

        this.list = list
      })
      .catch((err) => {
        console.log(err);
      });

    this.search = this.value || '';
  },
  mounted() {
    const tabLinks = document.querySelectorAll('.select-tab');
    tabLinks[this.tab].classList.add('active')
  },
  computed: {
  },
  methods: {
    changeTab(event, index) {
      const tabLinks = document.querySelectorAll('.select-tab');
      tabLinks.forEach(item => {
        item.classList.remove('active')
      })
      event.target.classList.add('active');
      this.tab = index;
    },
    getInput(value) {
      this.$emit('name', value)
      console.log(value)
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
.tab-item__select-popups {
  display: flex;
}
.tab-item__title {
  font-weight: 600;
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
.date-departing {
  width: 390px !important;
  margin-right: 0 !important;
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
