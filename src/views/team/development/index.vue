<template>
  <a-card>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-statistic-countdown
          title="距离圣诞节"
          :value="state.distanceChristmas"
          style="margin-right: 50px"
          format="D 天 H 时 m 分 s 秒"
          @finish="onFinish"
        />
      </a-col>
      <a-col :span="12">
        <a-statistic-countdown
          title="距离过年"
          :value="state.deadline"
          format="D 天 H 时 m 分 s 秒"
          style="margin-right: 50px"
        />
      </a-col>
      <a-col :span="24" style="margin-top: 32px">
        <a-statistic-countdown
          title="Day Level"
          :value="state.distancePayroll"
          format="D 天 H 时 m 分 s 秒"
        />
      </a-col>
    </a-row>
  </a-card>
  <div class="demo-content vertical penner-equations-demo"></div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import anime from 'animejs';

  onMounted(() => {
    anime({
      targets: '.ant-statistic-content',
      translateX: 0,
      rotate: '1turn',
      duration: 1600,
    });
  });

  const state = reactive({
    distancePayroll: new Date('2021-12-22'),
    distanceChristmas: new Date('2021-12-25'),
    deadline: new Date('2022-1-22'),
  });

  const onFinish = () => {
    console.log('finished!');
  };
</script>

<style scoped>
  .bg-grey {
    border: 1px solid #dbdbdb;
  }
  .vertical {
    flex-direction: row;
  }
  .demo-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 290px;
    height: 100%;
  }
  .el {
    color: red;
  }
  .square {
    pointer-events: none;
    position: relative;
    width: 28px;
    height: 28px;
    margin: 1px;
    background-color: #c26eff;
    font-size: 14px;
  }
  .stretched {
    height: 2px;
  }
</style>
