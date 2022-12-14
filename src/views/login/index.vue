<template>
  <div class="login">
    <el-form
      class="login-form"
      label-position="top"
      :rules="rules"
      ref="form"
      :model="form"
      label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import request from '@/utils/request'
// import qs from 'qs'
import { Form } from 'element-ui'
import { login } from '@/services/user'

export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      form: {
        name: '18201288771',
        password: '111111'
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度为6-18个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        if (await (this.$refs.form as Form).validate()) {
          // await login(this.form)
          if (this.form.password === '111111') {
            // 1、记录登录状态，全局访问，放到vuex容器中
            this.$store.commit('setUser', 'success')
            // 2、然后在访问需要认证的时候，判断有没有登录状态 （路由拦截器）
            // this.$router.push({
            //   name: 'home'
            // })
            this.$router.push(this.$route.query.redirect as string || '/')
          } else {
            this.$store.commit('setUser', 'fail')
          }
        }
      } catch {
        console.log('失败了！')
      }
      // 表单验证-通过-提交表单-处理结果
    }
  }
})
</script>

<style scoped>
.login{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form{
  width: 200px;
  background: #ddd;
  padding: 30px;
  border-radius: 20px;
}
.login-btn{
  width: 100%;
  margin-top: 30px;
}
</style>
