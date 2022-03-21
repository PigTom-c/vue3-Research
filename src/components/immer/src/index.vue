<template>
  <ul>
    <li v-for="({ title, done }, index) in items" :class="{ done }" @click="toggleItem(index)">
      {{ title }}
    </li>
  </ul>
</template>

<script setup>
  import { useImmer } from './index.ts';
  import { onMounted } from 'vue'

  onMounted(() => {
  })

  const { state: items, update } = useImmer([
    {
      title: 'learn vue',
      done: true,
    },
    {
      title: 'Use Vue with Immer',
      done: false,
    },
  ]);

  const toggleItem = (index) => {
    update((items) => {
      items[index].done = !items[index].done;
    });
  };

  function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }

  li {
    font-size: 20px;
  }
</style>
