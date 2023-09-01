//默认路由
import { AppRouteModule } from '/@/router/types';

const basicRoutes: Array<AppRouteModule> = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: null,
    meta: {
      layout: false,
      hideMenu: true,
    },
  },
  {
    path: '/:path(.*)*',
    name: 'PageNotFound',
    component: () => import('/@/views/exception/Exception.vue'),
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true,
    },
  },
];

export default basicRoutes;
