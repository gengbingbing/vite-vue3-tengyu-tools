import { getToken, setToken, removeToken } from '@/utils/token'
import { login, logout, getInfo }  from '@/api/user'

const state = () => {
    return {
        token: getToken(),
        userName: ''
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    },
    setName: (state, userName) => {
        state.userName = userName
    }
}

const actions = {
    login({ commit }, userInfo) {
        const { userName, userPass } = userInfo
        return new Promise((resolve, reject) => {
            login({
                userName: userName.trim(),
                userPass: userPass
            }).then(response => {
                const { data } = response
                // 请求成功，设置token
                commit('setToken', data.token)
                // 将token存入cookie
                setToken(data.token)

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout().then(() => {
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}