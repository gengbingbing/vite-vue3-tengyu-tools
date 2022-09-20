/*
 * @Author: bingbing.geng
 * @Date: 2022-09-20 11:05:36
 * @LastEditTime: 2022-09-20 11:17:26
 * @FilePath: \vite-vue3-tengyu-tools\src\api\user.js
 */
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