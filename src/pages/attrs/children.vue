<template>
  <div class="slider">
    <h1>{{ title }}</h1>
    <input 
      type="range"  
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="slider__input" />
      <div>Value: {{ modelValue }}</div>

      {{ $attrs }}
  </div>
</template>

<script>
export default {
  name: "Children",
  // 设置属性不在组件标签上展示
  inheritAttrs: false,
  props: {
    modelValue: [Number, String],
    title: [String],
    value: [Number, String],
  }
};
</script>