import Vue from 'vue'
import App from './App.vue'
import {UIBox} from 'plugin'

console.log('UIBoxPlugin', UIBox)
Vue.use(UIBox)

new Vue({
  el: '#app',
  render: h => h(App)
})
