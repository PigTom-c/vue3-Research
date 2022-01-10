<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <Motion
      tag="circle"
      cx="100"
      cy="100"
      r="80"
      pathLength="1"
      :animate="draw(1)"
      :transition="{ duration: 1, delay: 0.3 }"
    />
    <Motion
      tag="path"
      d="M 54 107.5 L 88 138.5 L 144.5 67.5"
      pathLength="1"
      :animate="draw(1)"
      :transition="{ duration: 0.8, delay: 1 }"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { Motion } from 'motion/vue';

  const draw = (progress: number) => ({
    // This property makes the line "draw" in when animated
    strokeDashoffset: 1 - progress,

    // Each line will be hidden until it starts drawing
    // to fix a bug in Safari where the line can be
    // partially visible even when progress is at 0
    visibility: 'visible',
  });
</script>

<style scoped>
  circle,
  path {
    fill: transparent;
    stroke: #57eb64;
    stroke-width: 6px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    visibility: hidden;
  }

  circle {
    transform-origin: 100px 100px;
    transform: rotate(-90deg);
  }
</style>
