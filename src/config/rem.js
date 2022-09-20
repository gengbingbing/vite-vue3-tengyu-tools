/*
 * @Author: bingbing.geng
 * @Date: 2022-09-20 11:05:36
 * @LastEditTime: 2022-09-20 11:34:50
 * @FilePath: \vite-vue3-tengyu-tools\src\config\rem.js
 */
// 基准大小
const baseSize = 24
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}