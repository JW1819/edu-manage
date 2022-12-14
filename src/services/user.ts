import request from '@/utils/request'
import qs from 'qs'
import store from '@/store'

interface User {
  name: string
  password: string
}

export const login = (param: User) => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    // headers: { 'content-type': 'application/x-www-form-urlencode' },
    data: qs.stringify(param) // axios默认发送application/json数据
  })
}

export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/front/user/getInfo',
    headers: {
      Authorization: store.state.user
    }
  })
}
