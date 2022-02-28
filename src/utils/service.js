import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { getToken } from '@/utils/token'
import store from '@/store/index'


let router = useRoute();

const service = axios.create({
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 请求之前判断是否存在token
        if(store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        ElMessage.error(error)
        return Promise.reject(error)
    }
)

// 返回拦截器
service.interceptors.response.use(
    response => {
        // 处理不同返回状态的操作
        const res = response.data
        if(res.code !== 200) {
            if(res.code === '403') {
                router.push({
                    path:'/login'
                });
            }
            ElMessage.error(res.message || 'Error')
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        ElMessage.error(error)
        return Promise.reject(error)
    }
)

export default service
