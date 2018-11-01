import Vue from 'vue'

/** Polyfill required for web components **/
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
