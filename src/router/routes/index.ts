import { createRouter, createWebHistory } from 'vue-router';
import type { AppRouteModule } from '/@/router/types';
const LAYOUT = () => import('/@/layouts/DefaultLayout.vue');

export const routes: Array<AppRouteModule> = [
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '图表',
    },
    component: () => import('/@/views/test/Demo.vue'),
  },
  {
    path: '/textra',
    name: 'textra',
    meta: {
      title: '首页',
    },
    component: () => import('/@/views/textra/index.vue'),
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      title: '表格',
      hideMenu: true,
    },
    component: () => import('/@/components/tableDataEngine.vue'),
  },
  {
    path: '/user',
    name: 'system',
    redirect: '/user/tom',
    component: LAYOUT,
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: 'alex',
        name: 'alex',
        meta: {
          title: 'alex',
        },
        component: () => import('/@/views/user/alex/index.vue'),
      },
      {
        path: 'bill',
        name: 'bill',
        meta: {
          title: 'bill',
        },
        component: () => import('/@/views/user/bill/index.vue'),
      },
      {
        path: 'tom',
        name: 'tom',
        meta: {
          title: 'tom',
        },
        component: () => import('/@/views/user/tom/index.vue'),
      },
    ],
  },
  {
    path: '/team',
    name: 'team',
    redirect: '/team/development',
    component: LAYOUT,
    meta: {
      title: 'Team',
    },
    children: [
      {
        path: 'development',
        name: 'development',
        meta: {
          title: 'development',
        },
        component: () => import('/@/views/team/development/index.vue'),
      },
      {
        path: 'testing',
        name: 'testing',
        meta: {
          title: 'testing',
        },
        component: () => import('/@/views/team/testing/index.vue'),
      },
    ],
  },
  {
    path: '/dexie',
    name: 'dexie',
    meta: {
      title: 'dexie',
    },
    component: () => import('/@/views/file/index.vue'),
  },
  {
    path: '/motion',
    name: 'motion',
    meta: {
      title: 'motion',
    },
    component: () => import('/@/components/motion/index.vue'),
  },
  {
    path: '/immer',
    name: 'immer',
    meta: {
      title: 'immer',
    },
    component: () => import('/@/components/immer/src/index.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    meta: {
      title: 'grid',
    },
    component: () => import('/@/views/grid/index.vue'),
  },
  {
    path: '/high',
    name: 'highcharts',
    meta: {
      title: 'highcharts',
    },
    component: () => import('/@/components/highcharts/HighCharts.vue'),
  },
  {
    path: '/auto',
    name: 'autoAnimate',
    meta: {
      title: 'animate',
    },
    component: () => import('/@/views/autoAnimate/index.vue'),
  },
  {
    path: '/promise',
    name: 'promise',
    meta: {
      title: 'promise',
    },
    component: () => import('/@/views/promise/index.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    meta: {
      title: 'pinia',
    },
    component: () => import('/@/views/pinia/index.vue'),
  },
  {
    path: '/xmind',
    name: 'xmind',
    meta: {
      title: 'xmind',
    },
    component: () => import('/@/views/mindmap/index.vue'),
  },
  {
    path: '/custom',
    name: 'custom',
    redirect: '/custom/copy',
    meta: {
      title: 'CustomDirective',
    },
    component: LAYOUT,
    children: [
      {
        path: '/copy',
        name: 'copy',
        meta: {
          title: 'copy',
        },
        component: () => import('/@/views/directive/copyDirect/index.vue'),
      },
      {
        path: '/waterMarker',
        name: 'waterMarker',
        meta: {
          title: 'waterMarker',
        },
        component: () => import('/@/views/directive/watermarkDirect/index.vue'),
      },
      {
        path: '/draggable',
        name: 'draggable',
        meta: {
          title: 'draggable',
        },
        component: () => import('/@/views/directive/dragDirect/index.vue'),
      },
      {
        path: '/debounce',
        name: 'debounce',
        meta: {
          title: 'debounce',
        },
        component: () => import('/@/views/directive/debounceDirect/index.vue'),
      },
      {
        path: '/throttle',
        name: 'throttle',
        meta: {
          title: 'throttle',
        },
        component: () => import('/@/views/directive/throttleDirect/index.vue'),
      },
      {
        path: '/longpress',
        name: 'longpress',
        meta: {
          title: 'longpress',
        },
        component: () => import('/@/views/directive/longpressDirect/index.vue'),
      },
    ],
  },
];
