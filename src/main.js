import Vue from 'vue'

/** Polyfill required for web components **/
import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js';
import '@webcomponents/template/template.js';

import App from './App.vue'

Vue.config.ignoredElements = [
  '/^vaadin-/'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
