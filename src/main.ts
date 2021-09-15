import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/antd.css';
import "./assets/css/tailwind.css"
import "tailwindcss/tailwind.css"

import { setupGlobDirectives } from './utils/instructions/index'

const app = createApp(App)
setupGlobDirectives(app)
app.use(Antd).use(router).mount('#app')
