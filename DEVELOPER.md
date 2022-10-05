# How to create a new component

## Create your Vue component

Implement your Vue SFC component as usual, for example:

```vue
// DumbComponent.ce.vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
h1 {
  color: blueviolet;
}
</style>
```

> :warning: Take care to respect the following rules with your component:
>- **File name**: your file name must end with `.ce.vue` in order to be compiled as a *custom element*
>- **Style scope**: do not add `scoped` attribute to the `<style>` tag, as its content will be automagically
   added to the *Shadow DOM* of the generated custom element, with other words any style will be automatically scoped to
   the component
>- **Props**: remember that every `props` of your component will be treated as a `string` so do not use complex
   object as
   props

## Register your Vue SFC as a custom-element

In the `main.js` file, you have to register your component and define the custom tag name in order to use it as
following:
> Here we define a Vue SFC `DumbComponent` and declare its usage under the tag name `<pc-dumb-component>`

```javascript
// main.js

import DumbComponent from "./components/DumbComponent/DumbComponent.ce.vue";

customElements.define("pc-dumb-component", defineCustomElement(DumbComponent));
```
