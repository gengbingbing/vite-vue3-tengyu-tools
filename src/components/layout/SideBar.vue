<template>
  <div class="sider">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :basePath="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import store from "../../store";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import SidebarItem from "./SidebarItem.vue";

const router = useRouter();
const routes = computed(() => router.options.routes);

const isCollapse = computed(() => store.state.layout.isCollapse);

const route = useRoute();
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }

  return path;
});
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
::v-deep {
    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
    }
}
</style>
