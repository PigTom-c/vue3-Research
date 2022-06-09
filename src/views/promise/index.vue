<template>
  <div>
    <span class="text-3xl">promise深入浅出</span>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {});

  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(2);
    }, 1000);
  }).then(Promise.resolve(1)).then((res) => {
    console.log(res);
  });

</script>

<style scoped></style>
