<template>
  <el-breadcrumb separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import * as pathToRegexp from "path-to-regexp";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const levelList = ref([]);
const route = useRoute();
const router = useRouter();

const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect.toString());
    return false;
  }

  const { params } = route;
  const toPath = pathToRegexp.compile(path);

  router.push(toPath(params));
};

watch(
  () => route.path,
  () => getBreadcrumb()
);

const getBreadcrumb = () => {
  let matched = route.matched.filter((item) => item?.meta?.title);
  const firstRoute = matched[0];

  if (!firstRoute.name) {
    matched = [{ path: "/dashboard", meta: { title: "看板首页" } }].concat(
      matched
    );
  }

  levelList.value = matched.filter((item) => item?.meta?.title);
};
getBreadcrumb();
</script>