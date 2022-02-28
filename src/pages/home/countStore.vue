<template>
    <h1>{{ count }}</h1>
    <h2 v-loading="loading">{{ double }}</h2>
    <button @click="add">添加购物车1</button>
    <button @click="asyncAdd">添加购物车2</button>
    <Todo type="测试" />
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue'

import Todo from '../../components/Todo.jsx'

const loading = ref(false)

let store = useStore()
let count = computed(() => store.state.test.count)
let double = computed(() => store.getters.double)

const add = () => {
    store.commit('test/add')
}

const asyncAdd = () => {
    store.dispatch('test/asyncAdd')
}
</script>
