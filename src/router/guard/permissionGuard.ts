import type { Router, RouteRecordRaw } from 'vue-router';

import { PageEnum } from '/@/enums/pageEnum';

// 创建路由守卫
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (to.path === PageEnum.BASE_HOME) {
      next();
      return;
    }
  });
}
