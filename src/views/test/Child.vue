<template>
  <div>
    <div class="flex">111</div>
    <a-button @click="click">click me</a-button>
    <Sketch @mouseleave="close" v-if="isShow" v-model="colors" />
  </div>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { Sketch } from '@ckpack/vue-color';

  // const colors = ref('rgba(25,77,51,0.66)')
  const colors = ref('rgba(64,213,139,1)')
  const isShow = ref(false)
  const test = inject('test');
  const click = () => {
    console.log(test);
    isShow.value = !isShow.value
  };

  const close = () => {
    isShow.value = false
  }
</script>

<style scoped></style>
