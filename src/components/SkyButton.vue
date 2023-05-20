<template>
  <a-button v-bind="$props" @click="$emit('click')">
    <template #icon>
      <a-icon :type="iconType" />
    </template>
    <slot></slot>
  </a-button>
</template>

<script>
  import { defineComponent } from "vue";
  import { Button, Icon } from "ant-design-vue";

  export default defineComponent({
    components: {
      "a-button": Button,
      'a-icon': Icon,
    },
    inheritAttrs: false,
    props: {
      ...Button.props,
      ...Icon.props,
    },
  });
</script>

<style lang="scss">
  button:focus,
  button:focus-visible {
    outline: none;
  }
</style>
