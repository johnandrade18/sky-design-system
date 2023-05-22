<template>
  <a-button v-bind="$props" @click="$emit('click')">
    <slot> </slot>
  </a-button>
</template>

<script>
  import { defineComponent } from "vue";
  import { Button } from "ant-design-vue";

  export default defineComponent({
    name: "SkyButton",
    components: {
      Button,
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
