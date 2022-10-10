<template>
  <div id="map"></div>
  <a-button @click="handleClick">show data</a-button>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import MindElixir, { E } from 'mind-elixir';
  import nodeData from '/@/views/mindmap/data/index';

  const ME = ref();

  onMounted(() => {
    initMind();
  });
  const data = {
    topic: 'node topic',
    id: 'bd1c24420cd2c2f5',
  };
  const initMind = () => {
    ME.value = new MindElixir({
      el: '#map',
      direction: MindElixir.RIGHT,
      draggable: false, // default true
      contextMenu: false, // default true
      toolBar: true, // default true
      nodeMenu: false, // default true
      keypress: false, // default true
      contextMenuOption: {
        focus: true,
        link: true,
        extend: [
          {
            name: 'Node edit',
            onclick: () => {
              alert('extend menu');
            },
          },
        ],
      },
    });

    ME.value.init(nodeData);

    console.log(ME.value.nodeData);
    // ME.value.nodeData.children.push(data);
  };

  const handleClick = () => {
    console.log(ME.value.getAllData());
  };
</script>

<style scoped>
  #map {
    height: 85vh;
    width: 100%;
  }
</style>
