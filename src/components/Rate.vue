
<template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span class="start" @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span class="start" @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
let props = defineProps({
  value: Number,
  color: {
    type: String,
    default: "orange",
  },
});
let width = ref(props.value);
const fontwidth = computed(() => `width:${width.value * 50}px;`);

const mouseOver = (i) => {
  width.value = i;
};

const mouseOut = (i) => {
  width.value = props.value;
};

const emit = defineEmits(['update-rate'])
const onRate = (i) => {
    emit('update-rate', i)
}

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontstyle = computed(() => {
  return `color:${themeObj[props.color] || props.color};`;
});
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
.start {
    padding: 0 10px;
    font-size: 36px;
}
</style>