<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <g v-for="i in segments" class="segment" :key="i">
      <Motion
        tag="path"
        d="M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z"
        :style="{ transform: 'rotate(' + (360 / segments) * i + 'deg)' }"
        :animate="{ opacity: [0, 1, 0] }"
        :transition="{
          offset: [0, 0.1, 1],
          duration,
          delay: i * offset,
          // repeat: Infinity,
          repeat: times,
        }"
      />
    </g>
  </svg>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { Motion } from 'motion/vue';

  const props = defineProps({
    times: {
      type: Number,
      default: Infinity
    },
    segments: {
      type: Number,
      default: 8
    },
    offset: {
      type: Number,
      default: 0.09
    }
  })

  const duration = computed(() => {
    return props.segments * props.offset
  })

</script>

<style scoped>
.segment path {
  opacity: 0;
  transform-origin: 100px 100px;
  fill: #00ffdb;
}
</style>
