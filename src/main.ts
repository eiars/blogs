import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './common/js/http'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(ElementPlus).mount('#app')
