<template>
  <el-container>
    <el-aside width="200px">
      <app-aside />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AppAside from './component/app-side.vue'
import AppHeader from './component/app-header.vue'

export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
  }
})
</script>

<style scoped>
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #fff;
}
.el-main {
  background: #e9eef3;
}
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
</style>
