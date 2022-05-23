<template>
  <Child :book="{title: 'human'}" />
  <a-select class="w-1/6" v-model:value="state.value" :options="state.options" />
  <v-chart
    v-show="state.value === 'pie'"
    class="chart"
    :init-options="state.initOptions"
    :option="option"
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
</template>

<script setup lang="ts">
  import Child from './Child.vue';
  import { ref, reactive, provide } from 'vue';

  // Map of China
  import chinaMap from './china.json';
  import worldMap from './world.json';
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

  provide('test', 111);

  use([
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
  const option = ref({
    title: {
      text: 'Traffic Sources',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
      {
        name: 'Traffic Sources',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });

  const state = reactive({
    bar: getData(),
    map: getMap(),
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
</script>

<style scoped>
  .chart {
    height: 400px;
  }

  .bar-chart {
    widht: 500px;
  }
</style>
