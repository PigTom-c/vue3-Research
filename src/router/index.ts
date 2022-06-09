import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('/@/views/test/Demo.vue'),
  },
  {
    path: '/textra',
    name: 'textra',
    component: () => import('/@/views/textra/index.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('/@/components/tableDataEngine.vue'),
  },
  {
    path: '/alex',
    name: 'alex',
    component: () => import('/@/views/user/alex/index.vue'),
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('/@/views/user/bill/index.vue'),
  },
  {
    path: '/tom',
    name: 'tom',
    component: () => import('/@/views/user/tom/index.vue'),
  },
  {
    path: '/development',
    name: 'development',
    component: () => import('/@/views/team/development/index.vue'),
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import('/@/views/team/testing/index.vue'),
  },
  {
    path: '/file',
    name: 'file',
    component: () => import('/@/views/file/index.vue'),
  },
  {
    path: '/motion',
    name: 'motion',
    component: () => import('/@/components/motion/index.vue'),
  },
  {
    path: '/immer',
    name: 'immer',
    component: () => import('/@/components/immer/src/index.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('/@/views/grid/index.vue'),
  },
  {
    path: '/high',
    name: 'highcharts',
    component: () => import('/@/components/highcharts/HighCharts.vue'),
  },
  {
    path: '/auto',
    name: 'autoAnimate',
    component: () => import('/@/views/autoAnimate/index.vue'),
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('/@/views/promise/index.vue'),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
