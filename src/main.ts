import { createApp } from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import { setupRouter } from './router';

import 'ant-design-vue/dist/antd.css';
import '/@/assets/css/tailwind.css';
import 'tailwindcss/tailwind.css';

import { setupGlobDirectives } from './utils/instructions/index';

if (import.meta.env.DEV) {
  import('vuedraggable');
  import('immer');
}

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupGlobDirectives(app);
  app.use(Antd).mount('#app');
}

void bootstrap();
