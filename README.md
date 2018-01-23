# Base Starter for Vaadin Elements and Vue.js

## Prerequisites

First [install npm](https://docs.npmjs.com/getting-started/installing-node).

Also install bower
``` bash
$ npm install -g bower
```

## Build Setup

``` bash
# install dependencies
$ npm install
$ bower install

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

$ bower init
# Keep all the options at their defaults

$ bower install --save Polymer/polymer
$ bower install --save vaadin
```

Add `bower_components/` to `.gitignore` to avoid pushing dependencies to version control.

Open `index.html` and add the following in the `head` section:
``` html
<script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
<link rel="import" href="bower_components/vaadin-valo-theme/vaadin-button.html">
<link rel="import" href="bower_components/vaadin-button/vaadin-button.html">
<link rel="import" href="bower_components/vaadin-valo-theme/vaadin-text-field.html">
<link rel="import" href="bower_components/vaadin-text-field/vaadin-text-field.html">
```

Open `src/main.js` and add the following after the imports section:
``` javascript
Vue.config.ignoredElements = [
  '/^vaadin-/'
]
```

Open `src/App.vue`
*	Replace all HTML in the `<template>` with:
``` html
<div>
  <vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
  <vaadin-button @click="clicked">Click Me!</vaadin-button>
  <h2>Hello {{msg}}!</h2>
</div>
```

* In the `<script>` section, inside `default` add the click event:
``` javascript
methods: {
  clicked() {
    this.msg = document.getElementById("text").value;
  }
}
```
