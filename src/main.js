import Vue from 'vue'

/** Polyfill required for web components **/
import '@webcomponents/webcomponentsjs/webcomponents-sd-ce.js';

import App from './App.vue'

Vue.config.ignoredElements = [
  '/^vaadin-/'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
