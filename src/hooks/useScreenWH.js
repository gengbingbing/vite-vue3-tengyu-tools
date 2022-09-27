/*
 * @Author: bingbing.geng
 * @Date: 2022-09-27 10:04:45
 * @LastEditTime: 2022-09-27 10:17:12
 * @FilePath: \vite-vue3-tengyu-tools\src\hooks\useScreenWH.js
 */
import { reactive, onMounted, onUnmounted } from 'vue'

const useScreenWH = () => {
  const screen = reactive({
    width: 0,
    height: 0
  })

  const getScrollBarWidth = () => {
    screen.width = document.documentElement.clientWidth
    screen.height = document.documentElement.clientHeight
  }

  onMounted(() => {
    screen.width = document.documentElement.clientWidth
    screen.height = document.documentElement.clientHeight

    window.addEventListener('resize', () => {
      getScrollBarWidth()
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize')
  })

  return {
    getScrollBarWidth,
    screen,
  }
}

export default useScreenWH
