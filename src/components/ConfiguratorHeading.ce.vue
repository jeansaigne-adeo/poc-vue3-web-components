<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="heading">
    <h1>{{ heading }}</h1>
    <p class="content">
      {{ content }}
    </p>
  </section>
</template>

<style lang="scss">
@import "../assets/common";

.heading {
  width: 500px;
  border: solid 1px lightgrey;
  border-radius: $mu025;
  padding: 0 16px;

  h1 {
    color: rebeccapurple;
  }

  .content {
    color: $color-grey-600;
  }
}
</style>
