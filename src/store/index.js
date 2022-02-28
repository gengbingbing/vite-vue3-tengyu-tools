// 如果只是组件内部使用就是用 ref 管理；如果我们需要跨组件
import { createStore } from "vuex";
import getters from "./getters";
import test from "./modules/test";
import user from "./modules/user";
import layout from "./modules/layout";

const store = createStore({
    modules: {
        test,
        user,
        layout
    },
    getters
})

export default store