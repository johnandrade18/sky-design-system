<template>
  <a-button v-bind="$props" @click="$emit('click')">
    <slot></slot>
  </a-button>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    components: {
      "a-button": Button,
    },
    inheritAttrs: false,
    props: {
      ...Button.props,
    },
  });
</script>

<style lang="scss">
  button:focus,
  button:focus-visible {
    outline: none;
  }
</style>
