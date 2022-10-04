<template>
  <m-option-card
    :id="id"
    :label="label"
    :model-value="checked"
    class="selectable-model"
    no-padding
    v-bind="optionCardAttrs"
    @change.prevent="handleSelection"
  >
    <div
      :style="{
        backgroundImage: 'url(' + imgSrc + ')',
        backgroundSize: imgBackgroundSize,
      }"
      class="selectable-model__image"
    ></div>
    <section class="selectable-model__content">
      <header>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="subtitle">
          <slot name="subtitle"></slot>
        </div>
      </header>
      <main>
        <slot name="content"></slot>
      </main>
      <footer>
        <span class="miscellaneous">{{ miscellaneous }}</span>
        <span class="pricing">{{ pricing }}</span>
      </footer>
    </section>
  </m-option-card>
</template>

<script setup>
import { MOptionCard } from "@mozaic-ds/vue-3/src/components/optioncard";
import { ref } from "vue";

const props = defineProps({
  id: String,
  label: String,
  imgSrc: String,
  imgAlt: String,
  imgSize: {
    type: String,
    default: () => "contain",
  },
  checked: Boolean,
  miscellaneous: String,
  pricing: String,
  optionCardAttrs: {
    type: Object,
    default: () => ({}),
  },
});

const imgBackgroundSize = ref(props.imgSize);

const emit = defineEmits(["optionSelected"]);

function handleSelection() {
  emit("optionSelected");
}
</script>

<style lang="scss">
@import "../../assets/common";
@import "@mozaic-ds/styles/components/_c.option-card.scss";
@import "@mozaic-ds/styles/components/_c.checkbox.scss";
@import "@mozaic-ds/styles/components/_c.radio.scss";

.selectable-model {
  @include set-font-face();
  text-align: left;
  width: 18rem;

  &__image {
    background-color: $color-grey-100;
    background-repeat: no-repeat;
    background-position: center;
    height: 12rem;
    width: 100%;
  }

  &__content {
    padding: $mu100;
  }

  header {
    @include set-font-face("semi-bold");

    .title {
      @include set-font-scale("05", "m");
    }

    .subtitle {
      @include set-font-scale("04", "l");
      color: $color-grey-600;
    }
  }

  main {
    @include set-font-scale("04", "m");
    margin-top: 6px;
    margin-bottom: 6px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    line-height: 100%;
    text-align: right;
    align-items: center;
    gap: $mu025;

    .miscellaneous {
      @include set-font-scale("01");
      flex: 1;
      color: $color-grey-600;
    }

    .pricing {
      @include set-font-face("semi-bold");
      @include set-font-scale("04");
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 27rem;

    header {
      .title {
        @include set-font-scale("06", "s");
      }

      .subtitle {
        @include set-font-scale("06", "l");
      }
    }

    footer {
      .miscellaneous {
        @include set-font-scale("02");
        flex: 1;
        color: $color-grey-600;
      }

      .pricing {
        @include set-font-scale("07");
      }
    }
  }
}
</style>
