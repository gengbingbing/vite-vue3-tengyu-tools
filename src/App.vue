<script setup>
import Header from '@/components/layout/header.vue'
import Layout from '@/components/layout/index.vue'
import { useRouter } from "vue-router";
import { ref, watch } from 'vue'
const Router = useRouter();

const state = ref(true)
watch(
  () => Router.currentRoute.value.path,
  (val) => {
    if(val === '/login') {
      state.value = false
    } else {
      state.value = true
    }
  }
);
</script>

<template>
  <Header v-if="state" />
  <router-view />
  
</template>

<style>

</style>
