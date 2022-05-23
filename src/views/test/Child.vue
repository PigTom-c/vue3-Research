<template>
  <div>
    <a-button @click="click">click me</a-button>
    <Sketch v-if="isShow" v-model="state.colors" />
  </div>
</template>

<script setup lang="ts">
  import { inject, ref, reactive, PropType, toRef } from 'vue';
  import { Sketch } from '@ckpack/vue-color';

  interface Book {
    title: string;
    author: string;
    year: number;
  }

  const props = defineProps({
    book: {
      type: Object as PropType<Book>,
      default: () => ({ title: 'Arrow Function Expression' }),
      validator: (book: Book) => !!book.title,
    },
    callback: Function as PropType<(id: number) => void>,
  });

  let book = toRef(props, 'book');

  const state = reactive({
    colors: 'rgba(64,213,139,1)',
  });

  const isShow = ref(false);
  const test = inject('test');
  const click = () => {
    console.log(test);
    book.value.title = 'aaa';
    console.log(props.book.title);

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
