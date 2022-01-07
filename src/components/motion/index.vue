<template>
  <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="Tab 1">
      <div class="flex justify-center">
        <a-button @click="handleShow">show</a-button>
        <Loding :times="times" v-if="loding" />
        <Finish v-if="finish" />
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">
      <QuickStart />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">
      <Finish />
    </a-tab-pane>
    <a-tab-pane key="4" tab="Tab 4">
      <Loding />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import QuickStart from './QuickStart.vue';
  import Finish from './Finish.vue';
  import Loding from './Loding.vue';

  const activeKey = ref('1');
  const loding = ref(false);
  const finish = ref(false);
  const times = ref(Infinity);

  const handleShow = async () => {
    loding.value = !loding.value;
    setTimeout(() => {
      loding.value = !loding.value;
      finish.value = !finish.value;
    }, 2000);

    setTimeout(() => {
      finish.value = !finish.value;
    }, 5000);
  };
</script>

<style scoped></style>
