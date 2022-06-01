import { createApp } from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import { setupRouter } from './router';

import 'ant-design-vue/dist/antd.css';
import '/@/assets/css/tailwind.css';
import 'tailwindcss/tailwind.css';

import { setupGlobDirectives } from './utils/instructions/index';
import { setupAutoAnimate } from '/@/directive/autoAnimate/index';
import VueHighcharts from '/@/directive/highcharts';

if (import.meta.env.DEV) {
  import('vuedraggable');
  import('immer');
}

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupAutoAnimate(app);
  setupGlobDirectives(app);
  app.use(VueHighcharts).use(Antd).mount('#app');
}

void bootstrap();
