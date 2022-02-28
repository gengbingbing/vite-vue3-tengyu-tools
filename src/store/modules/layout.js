const state = () => {
    return {
        isCollapse: false
    }
}

const mutations = {
    changeSlide(state) {
        return state.isCollapse = !state.isCollapse
    }
}

const actions = {
    asyncChangeSlide({ commit }) {
        commit('changeSlide')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}