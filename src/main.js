import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store/index.js'
import Css from './index.scss'
import './var.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/index'
import './config/rem.js'

const app = createApp(App)
// 屏蔽错误信息
app.config.errorHandler = () => null;
// 屏蔽警告信息
app.config.warnHandler = () => null;

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(Css)

app.mount('#app')
