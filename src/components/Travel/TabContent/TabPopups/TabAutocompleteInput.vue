<template>
  <div>
    <input
      class="place-input tab-input"
      type="text"
      @keydown.tab.prevent="complete()"
      @keyup="onInputChange"
      @keydown="onSelectData"
      v-model="input"
    />
    <table v-show="filteredData.length">
      <tbody>
        <tr
          v-for="(person, i) in filteredData"
          :key="person.id"
          @click="complete(i)"
        >
          <td :class="{ active: searchIndex === i }">{{ person[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { getPopularPlaces } from '../../../../API/database/contracts'

export default {
  name: "auto-complete",
  props: {
    data: Array,
    field: String,
  },
  data() {
    return {
      input: "",
      filteredData: [],
      searchIndex: 0,
      arrowDownKeyCode: 40,
      arrowUpKeyCode: 38,
      enterKeyCode: 13,
    };
  },
  created() {
    this.input = "";
  },
  mounted() {
  },
  destroyed() {
  },
  computed: {
  },
  methods: {
    complete(index) {
      this.input = this.filteredData[index][this.field]; 
      this.filteredData = [];
    },
    onInputChange(event) {
      const isEnterKey = event.keyCode === this.enterKeyCode;
      const isArrowDownKey = event.keyCode === this.arrowDownKeyCode;
      const isArrowUpKey = event.keyCode === this.arrowUpKeyCode;

      if (isEnterKey || isArrowDownKey || isArrowUpKey) {
        return;
      }
      const search = event.target.value.toLowerCase();

      this.input = event.target.value;

      this.searchIndex = 0;

      if (this.input.length) {
        this.filteredData = this.data.filter((town) =>
          town[this.field].toLowerCase().startsWith(search)
        );
      } else {
        this.filteredData = [];
      }
    },
    onSelectData(key) {
      const isArrowDownKey = key.keyCode === this.arrowDownKeyCode;
      const isArrowUpKey = key.keyCode === this.arrowUpKeyCode;
      const isEnterKey = key.keyCode === this.enterKeyCode;


      if (isArrowDownKey && this.searchIndex < this.filteredData.length - 1) {
        this.searchIndex++;
      } else if (isArrowUpKey && this.searchIndex > 0) {
        this.searchIndex--;
      } else if (isEnterKey) {
        this.complete(this.searchIndex);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.place-input {
  display: block;
  width: 345px;
  padding: 0 20px 0 65px;
  font-size: 15px;
}

.tab-input {
  height: 50px;
  border: 1px solid rgb(95, 95, 95);
  border-radius: 8px;
  margin: 0 10px 10px 0;
}

table {
  border: 1px solid #eaeaea;
  box-shadow: 2px 2px 4px rgba(0,0,0,.2);
  padding: 15px 22px;
  min-width: 340px;
}

table tr td {
  border-bottom: 1px solid #eaeaea;
  color: #777;
  height: 32px;
  font-weight: 600;
  font-size: .9em;
  
  &:last-child {
    border-bottom: none;
  }
  
  &.active {
    color: #ef5350;
  }
}</style>
