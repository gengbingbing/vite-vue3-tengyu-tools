/*
 * @Author: bingbing.geng
 * @Date: 2022-09-27 09:45:34
 * @LastEditTime: 2022-09-27 09:54:55
 * @FilePath: \vite-vue3-tengyu-tools\src\hooks\useMousePosition.js
 */
import { ref, onMounted, onUnmounted } from 'vue'

const MousePosition = () => {
  const x = ref(0)
  const y = ref(0)

  const updataMouse = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('mouseover', updataMouse)
  })

  onUnmounted(() => {
    document.addEventListener('mouseenter', updataMouse)
  })

  return { x, y }
}

export default MousePosition;
