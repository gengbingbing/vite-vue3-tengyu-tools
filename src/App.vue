<!--
 * @Author: bingbing.geng
 * @Date: 2022-09-20 11:05:36
 * @LastEditTime: 2022-09-20 11:31:50
 * @FilePath: \vite-vue3-tengyu-tools\src\App.vue
-->
<script setup>
import Header from "@/components/layout/header.vue";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
const Router = useRouter();

const state = ref(true);
watch(
  () => Router.currentRoute.value.path,
  val => {
    if (val === "/login") {
      state.value = false;
    } else {
      state.value = true;
    }
  }
);
</script>

<template>
  <div>
    <Header v-if="state" />
    <router-view></router-view>
  </div>
</template>

<style>
</style>
