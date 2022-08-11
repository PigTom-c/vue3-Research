import { defineStore } from 'pinia';
import { createLocalStorage } from '/@/utils/cache';

interface States {
  currentPath: string;
  count: number;
}

// 对外部暴露一个use方法, 该方法会导出我们定义的stroe
const useStore = defineStore('main', {
  state: (): States => ({
    currentPath: '',
    count: 0,
  }),
  getters: {
    getCurrentPath(): string {
      const ls = createLocalStorage();
      return this.currentPath || ls.get('currentPath');
    },
  },
  actions: {
    setCurrentPath(currentPath: string) {
      const ls = createLocalStorage();
      ls.set('currentPath', currentPath);
    },
  },
});

export default useStore;
