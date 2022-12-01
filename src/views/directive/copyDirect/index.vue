<template>
  <div class="card content-box">
    <span class="text">复制指令 🍇🍇🍇🍓🍓🍓</span>
    <div class="box-content">
      <a-input placeholder="请输入内容" v-model:value="data" style="width: 500px"></a-input>

      <a-button v-copy="data">复制</a-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="copyDirect">
  import { ref } from 'vue';

  const data = ref<string>('我是被复制的内容 🍒 🍉 🍊');
</script>

<style scoped></style>
