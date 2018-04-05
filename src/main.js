import Vue from 'vue'

import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

import App from './App.vue'

Vue.config.ignoredElements = [
  '/^vaadin-/'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
