<template>
  <Child />
</template>

<script setup lang="ts">
  import Child from './Child.vue';
  import { provide } from 'vue';

  provide('test', 111);
</script>

<style scoped>
  .flex {
    display: flex;
    width: 350px;
    justify-content: space-between;
  }
</style>
