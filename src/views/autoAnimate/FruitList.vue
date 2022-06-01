<template>
  <div>
    <ul v-auto-animate>
      <li v-for="item in state.items" :key="item">
        <span>{{ item }}</span>
        <span @click="removeItem(item)">
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

  const state = reactive({
    items: ['🥝猕猴桃', '🥥椰子', '🍇葡萄', '🍈哈密瓜', '🍉西瓜', '🍊橘子', '🍋菠萝', '🍌香蕉'],
  });

  function removeItem(toRemove) {
    console.log(toRemove);
    state.items = state.items.filter((item) => item !== toRemove);
  }

  function addItem() {
    state.items.push('🍏青苹果');
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
