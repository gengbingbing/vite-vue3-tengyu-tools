<template>
  <section class="main" :class="key === '/login' ? 'login-main' : 'app-main'">
    <router-view :key="key" v-slot="{ Component }">
      <transition appear name="fade-transition" mode="out-in">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const key = computed(() => {
  return route.path;
});
</script>


<style scoped lang="scss">
.login-main {
  height: 100%;
  min-height: calc(100vh - 0px);
}
.app-main {
  padding: 24px;
  width: calc(100% - 48px);
  position: relative;
  overflow: auto;
  height: inherit;
}
</style>
