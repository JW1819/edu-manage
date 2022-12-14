import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem('user') // 当前登录用户状态
  },
  getters: {
  },
  mutations: {
    // 修改容器属性必须使用mutation函数
    setUser (state, payload) {
      // payload是用户传值
      state.user = payload

      // 为了持久化
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
