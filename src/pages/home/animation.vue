
<template>
  <button @click="toggle">click</button>
  <transition name="modal">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
</template>

<script setup>
import { ref } from "vue";
let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>

<style>
.modal-enter-from {
  opacity: 0;
  transform: translateX(-120px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateX(-120px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
</style>