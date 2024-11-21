<template>
  <div>
    <ul v-auto-animate>
      <li v-for="item in state.items" :key="item.key">
        <span>{{ item.name }}</span>
        <span @click="removeItem(item.key)">
          <a-button class="my-button text-red-600" type="text">
            <template #icon><close-outlined /></template>
          </a-button>
        </span>
      </li>
    </ul>
    <a-button @click="addItem">+Add Fruit</a-button>
    <a-button class="ml-10" @click="randomItem">Randomize</a-button>
  </div>
</template>

<script setup>
  import { CloseOutlined } from '@ant-design/icons-vue';

  import { reactive } from 'vue';
  import { shuffle } from 'lodash-es';
  import { buildUUID } from '/@/utils/uuid';

  const state = reactive({
    items: [
      { key: '1', name: '🥝猕猴桃' },
      { key: '2', name: '🥥椰子' },
      { key: '3', name: '🍇葡萄' },
      { key: '4', name: '🍈哈密瓜' },
      { key: '5', name: '🍉西瓜' },
      { key: '6', name: '🍊橘子' },
      { key: '7', name: '🍋菠萝' },
      { key: '8', name: '🍌香蕉' },
    ],
  });

  function removeItem(toRemove) {
    console.log(toRemove);
    state.items = state.items.filter((item) => item.key !== toRemove);
  }

  function addItem() {
    const obj = {
      key: buildUUID(),
      name: '🍏青苹果',
    };
    state.items.push(obj);
  }

  function randomItem() {
    state.items = shuffle(state.items);
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    max-width: 300px;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.75em;
    background-color: #fff;
    margin-bottom: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #0000001a;
    font-size: 1.275em;
  }
  .my-button:hover {
    color: #e53e3e;
    background: none;
  }
</style>
