<template>
  <div>
    <a-button @click="click">click me</a-button>
    <Sketch v-if="isShow" v-model="state.colors" />
    {{ books }}
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

  // let book = toRef(props, 'book');
  let books = toRef(props, 'book');

  const state: { timer: null | NodeJS.Timeout } = reactive({
    colors: 'rgba(64,213,139,1)',
    book: props.book,
    timer: null,
  });

  const isShow = ref(false);
  const test = inject('test');
  const click = () => {
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }

    state.timer = setTimeout(async () => {
      console.log(test);
      books.value.title = 'aaa';
      console.log(props.book.title);

      // 深拷贝
      let obj = { x: 20, y: { z: 30 } };
      const cloneObj = JSON.parse(JSON.stringify(obj));
      isShow.value = !isShow.value;
    }, 1000);
  };

  defineExpose({
    isShow,
  });
</script>

<style scoped></style>
