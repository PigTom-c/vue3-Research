<template>
  <div class="card content-box">
    <span class="text">拖拽指令 🍇🍇🍇🍓🍓🍓</span>
    <div v-draggable class="drag-box flx-center">我可以拖拽哦~</div>
  </div>
</template>

<script setup lang="ts" name="dragDirect"></script>

<style scoped>
  .content-box {
    position: relative;
  }
  .drag-box {
    position: absolute;
    top: 110px;
    width: 300px;
    height: 300px;
    font-size: 23px;
    font-weight: bold;
    color: rgb(46 127 138);
    background: #b8d2dd;
    border-radius: 50%;
  }
</style>
