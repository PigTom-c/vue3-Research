import { createApp } from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import FightingDesign from 'fighting-design';
import { setupRouter } from './router';
import 'ant-design-vue/dist/antd.css';
import '/@/assets/css/tailwind.css';
import 'tailwindcss/tailwind.css';
import 'fighting-design/dist/index.css';

import directives from '/@/directive/index';
import VueHighcharts from '/@/directive/highcharts';
import { setupStore } from '/@/store';

if (import.meta.env.DEV) {
  import('vuedraggable');
  import('immer');
}

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.use(VueHighcharts).use(directives).use(Antd).use(FightingDesign).mount('#app');
}

void bootstrap();
