# Base Starter for Vaadin components with Vue.js

## Prerequisites

First [install npm](https://docs.npmjs.com/getting-started/installing-node).

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Recreating this project from scratch

Perform the following commands in a terminal window
``` bash
# install vue-cli
$ npm install -g vue-cli

# initialize the project
$ vue init webpack-simple hello-vue
# Keep all the options at their defaults

$ cd hello-vue
$ npm install

$ npm install --save @polymer/polymer@next
$ npm install --save @vaadin/vaadin-button
$ npm install --save @vaadin/vaadin-text-field
$ npm i --save @webcomponents/webcomponentsjs@latest
```


Open `src/main.js` and

In the `import` section, add:

``` typescript
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
```

Add the following after the imports section:

``` javascript
Vue.config.ignoredElements = [
  '/^vaadin-/'
]
```

Open `src/App.vue`
*	Replace all HTML in the `<template>` with:
``` html
<div>
  <vaadin-text-field ref="textField" id="text" placeholder="Type Something"></vaadin-text-field>
  <vaadin-button @click="clicked">Click Me!</vaadin-button>
  <h2>Hello {{msg}}!</h2>
</div>
```

* In the `<script>` section

Add imports

``` typescript
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
```

Inside `default` add the click event:

``` javascript
methods: {
  clicked() {
    this.msg = this.$refs.textField.value;
  }
}
```
