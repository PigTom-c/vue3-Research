import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { App } from 'vue';

export function setupAutoAnimate(app: App) {
  app.use(autoAnimatePlugin);
}
