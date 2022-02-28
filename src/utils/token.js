
/**
 * js-cookie 
 * 操作Cookie的一个npm插件
 * 
 */
import Cookies from "js-cookie"

const TokenKey = 'tengyu_template'

function getToken() {
    return Cookies.get(TokenKey)
}

function setToken(token) {
    return Cookies.set(TokenKey, token)
}

function removeToken() {
    return Cookies.remove(TokenKey)
}

export {
    getToken,
    setToken,
    removeToken
}