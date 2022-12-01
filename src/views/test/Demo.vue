<template>
  <Child ref="child" v-model:book="book" />
  <a-select
    class="w-1/6"
    v-model:value="state.value"
    :options="state.options"
    @select="handleSelect"
  />
  <v-chart
    v-show="state.value === 'pie'"
    class="chart"
    :init-options="state.initOptions"
    :option="state.pie"
  />

  <div v-show="state.value !== 'pie'" class="flex justify-center flex-row flex-wrap">
    <a-button @click="refresh" :disabled="state.seconds > 0">Refresh</a-button>
    <v-chart
      class="chart bar-chart"
      :option="state.bar"
      :init-options="state.initOptions"
      ref="bar"
      theme="ovilia-green"
      autoresize
      :loading="state.barLoading"
      :loadingOptions="state.barLoadingOptions"
    />
  </div>

  <v-chart
    class="chart mt-10"
    :option="state.map"
    :init-options="state.initOptions"
    ref="map"
    autoresize
  />

  <v-chart class="chart mt-10" :option="state.graph" :init-options="state.initOptions" />
</template>

<script setup lang="ts">
  import Child from './Child.vue';
  import { ref, reactive, provide, onMounted, nextTick } from 'vue';

  // Map of China
  import chinaMap from './data/china.json';
  import worldMap from './data/world.json';
  import webkitDep from './data/webkit.json';
  import { use, registerMap } from 'echarts/core';
  import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
  import {
    BarChart,
    PieChart,
    MapChart,
    RadarChart,
    ScatterChart,
    EffectScatterChart,
    LinesChart,
    GraphChart,
  } from 'echarts/charts';
  import {
    GridComponent,
    PolarComponent,
    GeoComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    DatasetComponent,
    ToolboxComponent,
    DataZoomComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import getData from './data/bar';
  import getMap from './data/map';
  import { getGraphOptions, getPieOptions } from './data/index';

  provide('test', 111);

  use([
    GraphChart,
    RadarChart,
    ScatterChart,
    EffectScatterChart,
    LinesChart,
    PolarComponent,
    VisualMapComponent,
    GridComponent,
    DatasetComponent,
    CanvasRenderer,
    SVGRenderer,
    PieChart,
    BarChart,
    MapChart,
    GeoComponent,
    ToolboxComponent,
    DataZoomComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);

  const book = ref({
    title: 'human',
  });

  const child = ref<InstanceType<typeof Child>>(null);

  onMounted(() => {
    book.value = {
      title: 'changsha',
    };
    // child.value.isShow = true;
  });

  const state = reactive({
    bar: getData(),
    pie: getPieOptions(),
    map: getMap(),
    graph: getGraphOptions(),
    initOptions: {
      renderer: 'svg' || 'canvas',
    },
    barLoading: false,
    barLoadingOptions: {
      text: 'Loading…',
      color: '#4ea397',
      maskColor: 'rgba(255, 255, 255, 0.4)',
    },
    seconds: 0,
    options: [
      {
        label: '饼图',
        value: 'pie',
      },
      {
        label: '柱状图',
        value: 'bar',
      },
    ],
    value: 'pie',
  });

  // registering map data
  registerMap('china', chinaMap);
  registerMap('world', worldMap);

  const refresh = () => {
    // simulating async data from server
    state.seconds = 1;
    state.barLoading = true;
    const timer = setInterval(() => {
      state.seconds--;
      if (state.seconds === 0) {
        clearTimeout(timer);
        state.barLoading = false;
        state.bar = getData();
      }
    }, 1000);
  };

  const handleSelect = (key: string) => {
    console.log(key);
  };
</script>

<style scoped>
  .chart {
    height: 400px;
  }

  .bar-chart {
    widht: 500px;
  }
</style>
