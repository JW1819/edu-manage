import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // 配置选项
  // baseUrl
  // timeout
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // const { user } = store.state
  // if(user) {
  //   config.headers.Authorization = user
  // }

  return config
}, function (error) {
  console.log(error)
})
// 响应拦截器

export default request
