// config router
import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import defaultRoutes from '/@/router/routes/basic';
import { routes } from '/@/router/routes/index';

export const router = createRouter({
  routes: routes.concat(defaultRoutes) as unknown as RouteRecordRaw[],
  history: createWebHistory(),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
