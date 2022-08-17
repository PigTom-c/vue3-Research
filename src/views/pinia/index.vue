<template>
  <div>
    <div class="text-5xl">pinia</div>
    <div>{{ count }}</div>
    <a-button @click="handleClick">click me</a-button>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import useStore from '/@/store/modules/user';
  import { utoa, atou } from '/@/utils/file/base64'

  const counter = useStore();

  const count = computed(() => counter.count);

  onMounted(() => {
    let utoa1 = utoa('大睡觉了看大事哦dasdsaW@!!**(');
    let atou1 = atou(utoa1);
    console.log(utoa1);
    console.log(atou1);

  })

  const handleClick = () => {
    counter.count++;
  };
</script>
<style scoped></style>
