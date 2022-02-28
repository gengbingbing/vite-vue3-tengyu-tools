
/**
 * @createRouter 新建路由实例
 * @createWebHashHistory 配置hsah模式的路由
 * 
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from '@/utils/token.js'
import NProgress from "nprogress";
import Layout from '@/components/layout/index.vue';
import setting from '@/config/setting'

const routes = [
    {
        path: '/login',
        name: '登录',
        hidden: true,
        meta: {
            title: '登录',
            icon: ''
        },
        component: () => import('@/pages/login/index.vue')
    },
    {
        path: '/403',
        name: '403',
        hidden: true,
        meta: {
            title: '403',
            icon: ''
        },
        component: () => import('@/pages/403.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: '/dashboard',
            name: '看板首页',
            component: () => import('@/pages/home/index.vue'),
            meta: {
                title: '看板首页',
                icon: ''
            }
        }],
    },
    {
        component: Layout,
        name: 'Tools',
        meta: { title: 'Tools', icon: 'el-icon-s-help' },
        path: '/tools',
        redirect: '/tools/animation',
        children: [
            {
                path: '/tools/animation',
                name: '动画',
                component: () => import('@/pages/home/animation.vue'),
                meta: {
                    title: '动画',
                    icon: ''
                }
            }, 
            {
                path: '/tools/countStore',
                name: 'store',
                component: () => import('@/pages/home/countStore.vue'),
                meta: {
                    title: 'store',
                    icon: ''
                }
            },
            {
                path: '/tools/draggable',
                name: 'draggable',
                component: () => import('@/pages/tools/draggable.vue'),
                meta: {
                    title: 'draggable',
                    icon: ''
                }
            },
        ]
      },
      {
        path: `/${setting.block}`,
        name: '文章',
        meta: {
            title: '个人博客',
            icon: ''
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

// 添加路由权限校验
router.beforeEach(async (to, from,next) => {
    NProgress.start()
    // canUserAccess() 返回 `true` 或 `false`
    let token = getToken()
    if(to.path === '/login') {
        next()
    }
    if(!token){
        next('/login')
    } else {
        next()
    }
    // next()
    return true
})

router.afterEach(() => {
    NProgress.done()
})

const _routers = router

export default _routers