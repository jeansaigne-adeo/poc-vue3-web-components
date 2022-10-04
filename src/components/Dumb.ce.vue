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
  <!--  <section class="heading">
      <h1 class="heading">{{ heading }}</h1>
      <p class="content">
        {{ content }}
      </p>
    </section>-->
</template>

<style>
h1 {
  color: blueviolet;
}
</style>
