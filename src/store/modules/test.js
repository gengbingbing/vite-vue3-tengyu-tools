const state = () => {
    return {
        count: 0
    }
}

const mutations = {
    add (state) {
        state.count++
    }
}

const actions = {
    asyncAdd({commit}) {
        commit('add')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}