<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="scss">
h1 {
  color: blueviolet;
}
</style>
