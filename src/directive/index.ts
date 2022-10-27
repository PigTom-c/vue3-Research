import { App } from 'vue';
import copy from './modules/copy';
import waterMarker from './modules/waterMarker';
import draggable from './modules/draggable';
import debounce from './modules/debounce';
import throttle from './modules/throttle';
import longpress from './modules/longpress';
import preventClick from './modules/clickStatefrom';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

const directivesList: any = {
  // Custom directives
  copy,
  waterMarker,
  draggable,
  debounce,
  throttle,
  longpress,
  preventClick,
  autoAnimatePlugin,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
