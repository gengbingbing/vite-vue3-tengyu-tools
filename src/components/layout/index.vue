<template>
  <SideBar :class="!isCollapse ? 'side-show' : 'side-hide'" class="sidebar-container" />
  <div :class="!isCollapse ? 'main-show' : 'main-hide'" class="main-container">
    <NavBar />
    <AppMain />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import AppMain from "./AppMain.vue";
import SideBar from "./SideBar.vue";
import store from '../../store';
import { computed } from 'vue';

const isCollapse = computed(() => store.state.layout.isCollapse)
</script>

<style lang="scss" scoped>
.sidebar-container {
  transition: width 0.28s;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 50px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  height: calc(100% - 50px);
  transition: margin-left 0.28s;
  position: relative;
  overflow: hidden;
}

.side-show {
  width: 210px;
}
.side-hide {
  width: 100px;
}

.main-show {
  margin-left: 210px;
}
.main-hide {
  margin-left: 100px;
}

</style>
