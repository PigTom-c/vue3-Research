import { Plugin, App } from 'vue';

import vueHighcharts from './highcharts';

const install = (app: App) => {
  app.component(<string>vueHighcharts.name, vueHighcharts);
};
vueHighcharts.install = install;

export default <Plugin>(vueHighcharts as unknown);
