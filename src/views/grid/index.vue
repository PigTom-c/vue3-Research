<template>
  <div class="wrapper">
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
    <a-input v-model:value="someObj.title" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, watch, ref, isRef, unref } from 'vue';

  const someObj = ref({ title: 'something...', id: 1 });

  const stopWatch = watch(
    () => someObj.value.title,
    (newVal) => {
      console.log(newVal);
    },
    {
      deep: true,
      immediate: true,
    }
  );
  onMounted(() => {
    const obj = {
      id: 1,
      name: 'aaa',
    };
    const obj1 = {
      id: 1,
      name: 'aaa',
    };
    const arr = [obj, obj1, [obj, obj1], [[obj, obj1]]];
    arr.unshift(
      {
        id: 2,
        name: 'bbb',
      },
      {
        id: 3,
        name: 'ccc',
      }
    );
    console.log(arr.flat(10));

    someObj.value.title = 'hhhh';
    stopWatch();
    console.log(isRef(someObj));
    const aaa = unref(someObj);
    aaa.id = 3;
    console.log(aaa);
    console.log(someObj.value.id);
  });
  interface Bar {
    type: 'bar';
  }

  interface Foo {
    type: 'foo';
  }

  interface Baz {
    type: 'baz';
  }

  type All = Bar | Foo | Baz;
  const handleValue = (val: All) => {
    switch (val.type) {
      case 'foo':
        break;
      case 'bar':
        break;
      default:
        const exhaustiveCheck: never = val;
        console.log(exhaustiveCheck);
        break;
    }
  };
</script>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
