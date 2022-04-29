<template>
  <div class="flex w-full justify-center">
    <Textra :data="words" :timer="3.1" :infinite="true" filter="right-left" />
  </div>
</template>

<script lang="ts" setup>
  import Textra from './components/Textra.vue';

  const words = [
    '今晚美丽的月色照耀着我，如百千个平凡的日子一样。',
    '我望着月亮 却只看见你',
    '在我荒瘠的土地上 你是最后的玫瑰',
    '有人问我春天是什么 于是我想起了第一次遇见你',
  ];
</script>

<style scoped></style>
