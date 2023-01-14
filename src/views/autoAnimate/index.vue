<template>
  <a-tabs v-model:activeKey="state.activeKey">
    <a-tab-pane key="1" tab="表情">
      <h5>Click emojis to remove them.</h5>
      <div class="pt-2 pb-2">
        <a-button @click="addItem">add</a-button>
        <a-button @click="randomItem">random</a-button>
      </div>
      <ul v-auto-animate>
        <li v-for="(item, index) in state.items" :key="item.id" @click="removeItem(item.id)">
          {{ item.value }}
        </li>
      </ul>
    </a-tab-pane>
    <a-tab-pane key="2" tab="水果" force-render>
      <FruitList />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Fisher-Yates shuffle">
      <ul v-auto-animate>
        <li v-for="(item, index) in state.list" :key="item">
          {{ item }}
        </li>
      </ul>
      <a-button @click="shuffles">random</a-button>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
  import { reactive } from 'vue';
  import { shuffle } from 'lodash-es';
  import FruitList from './FruitList.vue';
  import { buildUUID } from '../../utils/uuid';

  const state = reactive({
    items: [
      {
        id: 1,
        value: '😏',
      },
      {
        id: 2,
        value: '😐',
      },
      {
        id: 3,
        value: '😑',
      },
      {
        id: 4,
        value: '😕',
      },
      {
        id: 5,
        value: '😊',
      },
      {
        id: 6,
        value: '😂',
      },
      {
        id: 7,
        value: '🤣',
      },
      {
        id: 8,
        value: '😍',
      },
      {
        id: 9,
        value: '😒',
      },
      {
        id: 10,
        value: '😘',
      },
      {
        id: 11,
        value: '😁',
      },
      {
        id: 12,
        value: '😉',
      },
      {
        id: 13,
        value: '😎',
      },
      {
        id: 14,
        value: '😢',
      },
      {
        id: 15,
        value: '😜',
      },
      {
        id: 16,
        value: '🤦‍♀',
      },
      {
        id: 17,
        value: '🤷‍♀',
      },
      {
        id: 18,
        value: '🤷‍♂',
      },
      {
        id: 19,
        value: '🌹',
      },
      {
        id: 20,
        value: '😃',
      },
      {
        id: 21,
        value: '👀',
      },
      {
        id: 22,
        value: '🤔',
      },
      {
        id: 23,
        value: '😆',
      },
      {
        id: 24,
        value: '🤢',
      },
    ],
    activeKey: '1',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  function removeItem(toRemove) {
    console.log(toRemove);
    state.items = state.items.filter((item) => item.id !== toRemove);
  }

  function addItem() {
    state.items.push({ id: buildUUID(), value: '😶' });
  }

  function randomItem() {
    state.items = shuffle(state.items);
  }

  function shuffles() {
    const array = state.list;
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    state.list = array;
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    user-select: none;
    position: relative;
  }

  li {
    border: 1px solid #e8b14b;
    border-radius: 5px;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5em;
    cursor: pointer;
  }

  li:hover {
    background: #ece3ff;
    border-color: #7335d7;
  }
</style>
