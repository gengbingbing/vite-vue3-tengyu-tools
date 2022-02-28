
<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    {{ obj.title }}-{{ obj.num }}-{{ double }}
    <el-button type="primary" @click="reset">初始化</el-button>

    <h2>您的评分是：{{ score }}</h2>
    <Rate :value="score" color="#666666" @update-rate="update">
        <h3>评分</h3>
    </Rate>

    <!-- <div class="box"></div> -->
  </div>
</template>

<script setup>
import Rate from '../../components/Rate.vue'
import { useFullscreen } from '@vueuse/core'
// ref 和 reactive 一个针对原始数据类型，而另一个用于对象
import { ref, reactive, computed } from "vue";
const { isFullscreen, enter, exit, toggle } = useFullscreen()

const score = ref(1)
const update = (val) => {
    score.value = val
}

let count = ref(0);
let color = ref("red");
const obj = reactive({
  title: "测试",
  id: "001",
  num: 0,
});

const double = computed(() => {
    return count.value * 2
})

const add = () => {
  obj.title = "测试";
  obj.num++;
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
};

const reset = () => {
  count.value = 0;
  color.value = "black";
  obj.title = "初始化";
  obj.num = 0
  toggle()
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
.box {
    width: 50px;
    height: 50px;
    background: red;
    position: relative;
    animation: move 2s linear infinite;
}
@keyframes move {
    0% {
        left: 0px;
    }
    25% {
        left: 200px;
        top: 0px;
    }
    50% {
        left: 200px;
        top: 200px;
    }
    75% {
        left: 0px;
        top: 200px;
    }
    100% {
        left: 0px;
        top: 0px;
    }
}
</style>>