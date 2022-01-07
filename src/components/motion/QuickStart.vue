<template>
  <div class="container">
    <Motion
        :key="current"
        :initial="{ opacity: 0, x: 50 }"
        :animate="{
        opacity: 1,
        x: 0,
        transition: { delay: 0.1 },
      }"
        :exit="{ opacity: 0, x: -50 }"
        class="slide"
    >
      {{ current }}
    </Motion>
    <a-button @click="current++">
      Next
    </a-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Motion } from 'motion/vue';
const current = ref<number>(0);
</script>

<style scoped>

.container {
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.container button {
  cursor: pointer;
}

.slide {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: var(--red);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  line-height: 72px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  top: 0;
  left: 0;
}
</style>
