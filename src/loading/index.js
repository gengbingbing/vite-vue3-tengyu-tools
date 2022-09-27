/*
 * @Author: bingbing.geng
 * @Date: 2022-09-27 10:57:55
 * @LastEditTime: 2022-09-27 10:59:04
 * @FilePath: \vite-vue3-tengyu-tools\src\loading\index.js
 */
import { createApp, reactive } from 'vue'

import myLoad from './loading.vue'

const msg = reactive({
  show: false,
  title: '加载中...'
})

const $loading = createApp(myLoad, {msg}).mount(document.createElement('div'))
const loading = {
  show(title = msg.title) { // 控制显示loading的方法
    msg.show = true
    msg.title = title
    document.body.appendChild($loading.$el)
  },
  hide() { // 控制loading隐藏的方法
    msg.show = false
  }
}
export  { loading }
