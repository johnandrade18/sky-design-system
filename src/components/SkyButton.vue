<template>
  <a-button v-bind="$props" @click="$emit('click')">
    <template #icon>
      <slot></slot>
    </template>
    <slot></slot>
  </a-button>
</template>

<script>
  import { defineComponent } from "vue";
  import { Button } from "ant-design-vue";

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
