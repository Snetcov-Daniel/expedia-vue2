import Vue from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      input: ''
    }
  },
  mutations: {
    
  }
})

export const EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

App.use(store)
