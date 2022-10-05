# Installation

## Project Setup

```sh
yarn add vue3wc
```

## Import the library

In your main.js file import the javascript library directly:

```javascript
// main.js
import 'vue3wc/dist/assets/index.13f4386d'
```

## Use any component from the library

Here we are ready to use any component from the library directly calling the tag names you need, for
exemple: `<pc-dumb-component></pc-dumb-component>`.

### Frameworks miscellaneous

#### VueJS

:
warning:[exclude custom element from vue element compilation](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)

With Vite:

```javascript
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
	vue({
	  template: {
		compilerOptions: {
		  // treat all tags with a dash as custom elements
		  isCustomElement: (tag) => tag.startsWith('pc-')
		}
	  }
	})
  ]
}
```

With Vue CLI

```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
	config.module
	  .rule('vue')
	  .use('vue-loader')
	  .tap(options => ({
		...options,
		compilerOptions: {
		  // treat any tag that starts with ion- as custom elements
		  isCustomElement: tag => tag.startsWith('pc-')
		}
	  }))
  }
}
```

:
warning:[deactivate deprecated slot usage eslint warning](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)

#### Angular

For an angular application you will need to activate the `CUSTOM_ELEMENTS_SCHEMAS` on the module including your library
to allow the custom html tags.

```javascript
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule {
}
```



