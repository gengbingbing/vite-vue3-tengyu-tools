<!--
 * @Author: bingbing.geng
 * @Date: 2022-09-20 15:07:38
 * @LastEditTime: 2022-09-27 14:34:55
 * @FilePath: \vite-vue3-tengyu-tools\src\pages\attrs\index.vue
-->
<template>
  <div>
    <Children
      v-model="value"
      min="0"
      max="50"
      class="blue_slider"
      id="special_id"
      data-cy="cypress-slider"
      @keydown="() => true"
      aria-label="Example slider"
      title="$attrs"
    />
    <div>
      <p>X: {{ x }}</p>
      <p>Y: {{ y }}</p>
      <p>W: {{ screen.width }}</p>
      <p>H: {{ screen.height }}</p>
    </div>
  </div>
</template>

<script setup>
import { loading } from '@/loading/index.js'
import useMousePosition from '@/hooks/useMousePosition'
import useScreenWH from '@/hooks/useScreenWH'
import Children from './children.vue'
import { ref } from 'vue'

const value = ref('20')

const { x, y } = useMousePosition()
const { screen } = useScreenWH()

loading.show('紧急运算中...')

setTimeout(() => {
  loading.hide()
}, 5000)
</script>