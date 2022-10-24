<template>
  <div>
    <div ref="myPage" style="height: calc(100vh - 50px)">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      >
        <div
          slot="node"
          slot-scope="{ node }"
          @mouseover="showNodeTips(node, $event)"
          @mouseout="hideNodeTips(node, $event)"
        >
          <div
            style="
              color: forestgreen;
              font-size: 16px;
              position: absolute;
              width: 160px;
              height: 25px;
              line-height: 25px;
              margin-top: 5px;
              margin-left: -48px;
              text-align: center;
              background-color: rgba(66, 187, 66, 0.2);
            "
          >
            111
          </div>
        </div>
      </SeeksRelationGraph>
    </div>
    <div
      v-if="state.isShowNodeTipsPanel"
      :style="{
        left: state.nodeMenuPanelPosition.x + 'px',
        top: state.nodeMenuPanelPosition.y + 'px',
      }"
      style="
        z-index: 999;
        padding: 10px;
        background-color: #ffffff;
        border: #eeeeee solid 1px;
        box-shadow: 0px 0px 8px #cccccc;
        position: absolute;
      "
    >
      <div style="line-height: 25px; padding-left: 10px; color: #888888; font-size: 12px">
        节点名称：{{ state.currentNode.text }}
      </div>
      <div class="c-node-menu-item">id:111</div>
      <div class="c-node-menu-item">图标:222</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted, nextTick } from 'vue';
  import 'sf-relation/sf-relation.min.css';
  import SeeksRelationGraph from 'sf-relation';

  const seeksRelationGraph = ref<InstanceType<typeof SeeksRelationGraph>>(null);
  const myPage = ref(null);
  let graphOptions = reactive({
    allowShowMiniToolBar: false,
    defaultNodeBorderWidth: 0,
    defaultNodeColor: 'rgba(238, 178, 94, 1)',
    defaultLineShape: 1,
    disableDragNode: true,
    layouts: [
      {
        label: '中心',
        layoutName: 'center',
        layoutClassName: 'seeks-layout-center',
      },
    ],
    defaultJunctionPoint: 'border',
  });

  const state = reactive({
    isShowNodeTipsPanel: false,
    currentNode: {},
    nodeMenuPanelPosition: { x: 0, y: 0 },
  });

  onMounted(() => {
    showSeeksGraph();
  });

  const colors = ['#788543', '#8F6533', '#8A3E75', '#D96F34', '#613232'];

  function showSeeksGraph() {
    var __graph_json_data = {
      rootId: '2',
      nodes: [
        { id: '2', name: '节点-2' },
        { id: '3', name: '节点-3' },
        { id: '4', name: '节点-4' },
        { id: '6', name: '节点-6' },
        { id: '7', name: '节点-7' },
        { id: '8', name: '节点-8' },
        { id: '9', name: '节点-9' },
      ],
      links: [
        { from: '2', to: '2', text: '投资' },
        { from: '3', to: '2', text: '投资' },
        { from: '4', to: '2', text: '高管' },
        { from: '6', to: '2', text: '高管' },
        { from: '2', to: '7', text: '高管' },
        { from: '2', to: '8', text: '高管' },
        { from: '2', to: '9', text: '高管' },
      ],
    };

    seeksRelationGraph.value.setJsonData(__graph_json_data, (seeksRGGraph) => {
      // Called when the relation-graph is completed
      console.log('[sf-relation]完成', seeksRGGraph);
    });

    const list:string[] = [];

    seeksRelationGraph.value.getNodes().forEach((val) => {
      list.push(val.text);
    });

    nextTick(() => {
      let elements = document.getElementsByClassName('rel-node-peel');
      for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('title', list[i]);
      }
    });
  }

  function onNodeClick(nodeObject, $event) {
    console.log('onNodeClick:', nodeObject);
    console.log('onNodeClick:', $event);
  }
  function onLineClick(lineObject, $event) {
    console.log('onLineClick:', lineObject);
    console.log('onNodeClick:', $event);
  }

  function showNodeTips(nodeObject, $event) {
    state.currentNode = nodeObject;
    var _base_position = myPage.value.getBoundingClientRect();
    console.log('showNodeMenus:', $event, _base_position);
    state.isShowNodeTipsPanel = true;
    state.nodeMenuPanelPosition.x = $event.clientX - _base_position.x + 10;
    state.nodeMenuPanelPosition.y = $event.clientY - _base_position.y + 10;
  }

  function hideNodeTips(nodeObject, $event) {
    state.isShowNodeTipsPanel = false;
  }
</script>

<style scoped>
  .c-node-menu-item {
    line-height: 30px;
    padding-left: 10px;
    cursor: pointer;
    color: #444444;
    font-size: 14px;
    border-top: #efefef solid 1px;
  }
  .c-node-menu-item:hover {
    background-color: rgba(66, 187, 66, 0.2);
  }
</style>
