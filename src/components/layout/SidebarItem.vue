<template>
  <!-- 导航只有一层的情况下 -->
  <template
    v-if="
      hasOneShowingChild(props.item.children, props.item) &&
      (!onlyOneChild.children || onlyOneChild.noShowChildren) &&
      !props.item.hidden
    "
  >
    <el-menu-item
      :style="'height:' + (props.item.hidden ? '0px; display: none;' : 'auto')"
      :index="resolvePath(onlyOneChild.path)"
      :class="{ 'submenu-title-noDropdown': !isNest }"
      @click="jump(onlyOneChild.path)"
    >
      {{ onlyOneChild?.meta?.title }}
    </el-menu-item>
  </template>

  <!-- 嵌套导航 -->
  <template v-else>
    <el-sub-menu
      :style="'height:' + (props.item.hidden ? '0px; display: none;' : 'auto')"
      :index="resolvePath(onlyOneChild.path)"
      popper-append-to-body
      class="nest-menu"
    >
      <template #title>
        {{
          props.item.meta.title
        }}
      </template>
      <sidebar-item
        v-for="child in props.item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :basePath="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { isExternal } from "@/utils/utils.js";

const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
});

const resolvePath = (path) => {
  return `${path}`;
};

const jump = (path) => {
  if (path.includes('http')) {
    window.open(path.slice(1), '_black')
  } else {
    router.push(path);
  }
};

const onlyOneChild = ref({});

const hasOneShowingChild = (children = [], parent) => {
  const showChildren = children.filter((item) => {
    if (item.hidden) {
      return false;
    } else {
      onlyOneChild.value = item;
      return true;
    }
  });

  if (showChildren.length === 1) {
    return true;
  }

  if (showChildren.length === 0) {
    onlyOneChild.value = {
      ...parent,
      noShowChildren: true,
    };
    return true;
  }

  return false;
};
</script>

<style lang="scss" scoped>
.menu-name {
  user-select: none;
}
</style>
