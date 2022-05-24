<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="true"
    :animateOnUpdate="true"
    @rendered="onRender"
    @updated="onUpdate"
    @destroyed="onDestroy"
  ></vue-highcharts>
</template>

<script lang="ts" setup>
  import VueHighcharts from '/@/directive/highcharts/highcharts';
  import { chartOptions } from './data/index';

  const onRender = () => {
    console.log('onRender');
  };
  const onUpdate = () => {
    console.log('onUpdate');
  };
  const onDestroy = () => {
    console.log('onDestroy');
  };
</script>

<style scoped></style>
