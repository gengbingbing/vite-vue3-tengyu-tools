<template>
  <div class="bread">
    <div class="btn">
      <Hamburger
        :is-active="isCollapse"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
    </div>
    <div class="breadcrumb">
      <BreadCrumb />
    </div>
  </div>
</template>

<script setup>
import { DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
import BreadCrumb from "./BreadCrumb.vue";
import Hamburger from "./Hamburger.vue";
import store from "../../store";
import { computed } from "vue";

const isCollapse = computed(() => store.state.layout.isCollapse)

const toggleSideBar = () => {
    store.dispatch('layout/asyncChangeSlide')
}


</script>



<style lang="scss" scoped>
.bread {
  height: 46px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.btn {
  line-height: 46px;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  padding: 0 12px;
}

.breadcrumb {
  line-height: 2.875rem;
  float: right;
  width: calc(100% - 50px);
  height: 46px;
}

.el-breadcrumb {
  line-height: 42px;
}

.hamburger-container {
    line-height: 46px;
    height: 46px;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
</style>