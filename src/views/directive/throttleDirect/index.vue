<template>
  <div class="card content-box">
    <span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
    <a-button type="primary" v-throttle="throttleClick">节流按钮 (每隔1S秒后执行)</a-button>
  </div>
</template>

<script setup lang="ts" name="throttleDirect">
  import { message } from 'ant-design-vue';
  const throttleClick = () => {
    message.success('我是节流按钮触发的事件 🍍🍓🍌');
  };
</script>

<style scoped lang="scss"></style>
