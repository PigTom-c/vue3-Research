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
  import { utoa, atou } from '/@/utils/file/base64';
  import { treeToFlat } from '/@/utils/tree';

  const counter = useStore();

  const count = computed(() => counter.count);

  onMounted(async () => {
    let utoa1 = utoa('大睡觉了看大事哦dasdsaW@!!**(');
    let atou1 = atou(utoa1);
    console.log(utoa1);
    console.log(atou1);

    const a = (x: number) => (y: number) => (z: number) => x + y + z;
    console.log(a(1)(2)(3));

    console.log(undefined ?? 1);

    const arr = [1, 2, 3, 4, 5];

    await Promise.all(arr.map(async (i) => await t(i)));
    console.log('end');

    const data = [
      {
        label: 'Node 1',
        children: [
          {
            label: 'Node 1-1',
            children: [{ label: 'Node 1-1-1' }, { label: 'Node 1-1-2' }, { label: 'Node 1-1-3' }],
          },
          { label: 'Node 1-2' },
          { label: 'Node 1-3' },
        ],
      },
      { label: 'Node 2' },
    ];
    console.log(treeToFlat(data));
  });

  function t(num: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('定时器', num);
        resolve('');
      }, 1000);
    });
  }

  const handleClick = () => {
    counter.count++;
  };
</script>
<style scoped></style>
