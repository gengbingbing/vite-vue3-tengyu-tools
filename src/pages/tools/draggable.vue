<!-- 
    推荐一个好用的栅格化布局工具-支持拖拽，将内容换成组件，即可实现组件拖拽
    https://jbaysolutions.github.io/vue-grid-layout/zh/guide/events.html#gridlayout
 -->
<template>
  <!--使用draggable组件-->
  <draggable
    :list="myArray"
    item-key="id"
    group="people"
    animation="500"
    ghost-class="ghost"
    :disabled="drag"
  >
    <template #item="{ element }">
      <span class="item chosen" :style="'width:' + w(element)">
        {{ element.name }}
      </span>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
import { ref, reactive, computed } from "vue";

const drag = ref(false)

const w = computed(() => item => item.width)

const myArray = reactive([
  { people: "us", id: 1, name: "A", width: "250px;" },
  { people: "us", id: 2, name: "B", width: "120px;" },
  { people: "us", id: 3, name: "C", width: "350px;" },
  { people: "us", id: 4, name: "D", width: "150px;" },
  { people: "us", id: 5, name: "E", width: "150px;" },
  { people: "us", id: 6, name: "F", width: "150px;" },
  { people: "us", id: 7, name: "G", width: "150px;" },
  { people: "us", id: 8, name: "H", width: "150px;" },
  { people: "us", id: 9, name: "I", width: "150px;" },
  { people: "us", id: 10, name: "G", width: "150px;" },
  { people: "us", id: 11, name: "K", width: "150px;" },
  { people: "us", id: 12, name: "L", width: "150px;" },
  { people: "us", id: 13, name: "M", width: "150px;" },
  { people: "us", id: 14, name: "M", width: "150px;" },
  { people: "us", id: 15, name: "O", width: "150px;" },
]);


console.clear()
console.table(myArray)
console.info(`%c推荐一个好用的栅格化布局工具-支持拖拽，将内容换成组件，即可实现组件拖拽
Github: https://jbaysolutions.github.io/vue-grid-layout/zh/guide/events.html#gridlayout
`, 'font-size: 26px; color: blue; font-weight: 700;')

const change = () => {};

const addPeople = () => {};
</script>

<style lang="scss" scoped>
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 2px #eee;
  margin-bottom: 10px;
  cursor: move;
  display: inline-block;
  height: 120px;
  margin: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover:active {
    border: solid 2px #3089dc !important;
  }

}
/*选中样式*/
.ghost {
    border: solid 2px #3089dc !important;
}
</style>
