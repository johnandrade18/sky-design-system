<script setup>
import SkyButton from './components/SkyButton.vue'
import { DownloadOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <h1>Sky-Button</h1>
  <SkyButton type="primary" shape="round" size="large">
    <slot>
      <DownloadOutlined />
    </slot>
    Button
  </SkyButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
