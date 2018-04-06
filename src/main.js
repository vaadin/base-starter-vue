import Vue from 'vue'

import '@webcomponents/webcomponentsjs/webcomponents-loader.js';

import App from './App.vue'

Vue.config.ignoredElements = [
  '/^vaadin-/'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
