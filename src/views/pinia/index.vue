<template>
  <div>
    <div class="text-5xl">pinia</div>
    <div>{{ count }}</div>
    <a-button @click="handleClick">click me</a-button>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import useStore from '/@/store/modules/user';

  const counter = useStore();

  const count = computed(() => counter.count);

  const handleClick = () => {
    counter.count++;
  };
</script>
<style scoped></style>
