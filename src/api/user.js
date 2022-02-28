import axios from '@/utils/service'

function login(userInfo) {
    return axios({
        url: '/login',
        method: 'post',
        data: userInfo
    })
}

function logout() {
    return axios({
        url: '/logout',
        method: 'post'
    })
}

function getInfo(uuid) {
    return axios({
        url: '/info',
        method: 'get',
        params: uuid
    })
}

export {
    login,
    logout,
    getInfo
}