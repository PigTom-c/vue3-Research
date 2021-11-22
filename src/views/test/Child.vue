<template>
  <div>
    <a-button @click="click">click me</a-button>
    <Sketch v-if="isShow" v-model="state.colors" />
  </div>
</template>

<script setup lang="ts">
  import { inject, ref, reactive } from 'vue';
  import { Sketch } from '@ckpack/vue-color';

  const state = reactive({
    colors: 'rgba(64,213,139,1)',
  });

  const isShow = ref(false);
  const test = inject('test');
  const click = () => {
    console.log(test);

    // 深拷贝
    let obj = { x: 20, y: { z: 30 } };
    const cloneObj = JSON.parse(JSON.stringify(obj));
    isShow.value = !isShow.value;
  };

  const close = () => {
    isShow.value = false;
  };
</script>

<style scoped></style>
