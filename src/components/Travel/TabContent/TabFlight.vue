<template>
  <form action="#" class="tab__content-item tab-item">
    <div class="tab-item__select">
      <tab-conditions />
      <tab-class />
    </div>
    <div class="tab-item__inputs">
      <div class="tab-item__inputs-places place-inputs">
        <autocomplete-input
        :data="list"
        :field="field"
        ></autocomplete-input>
        <input
          type="text"
          class="place-input place-to tab-input"
          placeholder="to"
        />
      </div>
      <div class="tab-item__inputs-date date-inputs">
        <input type="date" class="date-input tab-input" />
        <input type="date" class="date-input tab-input" />
      </div>
    </div>
    <button type="submit" @submit.prevent class="tab-item__button">
      Search
    </button>
    <!-- <div class="suggestion" v-for="(item,i) in searchTowns" :key="i" >{{ item.name }}</div> -->
  </form>
</template>

<script>
import TabConditionsPopup from "./TabPopups/TabConditionsPopup";
import TabClassPopup from "./TabPopups/TabClassPopup";
import Autocomplete from './TabPopups/TabAutocompleteInput.vue';
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
      search: '',
      field: 'name'
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
  },
  computed: { 
  },
  methods: {
  },
};
</script>

<style scoped>
.tab-item__select {
  display: flex;
  justify-content: right;
  margin-bottom: 30px;
}
.tab-item__inputs {
  display: flex;
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
