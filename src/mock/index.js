
import Mock from 'mockjs'
 
Mock.mock('/login', 'post', (request) => {
    let body = JSON.parse(request.body)
    if(body.userName === 'admin' && body.userPass === 'admin123') {
        return {
            code: 200,
            data: {
                message: '登陆成功'
            }
        }
    } else {
        return {
            code: 204,
            data: {
                message: '密码/账号不对~'
            }
        }
    }
})

Mock.mock('/logout', 'post', request => {
    return {
        code: 200,
        data: {
            message: '注销成功'
        }
    }
})