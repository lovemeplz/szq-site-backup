<template>
  <div class="layout-sidebar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu" />
          <span slot="title"><router-link :to="{ path: '/tech' }">技术</router-link></span>
        </template>
        <el-menu-item index="1-1">
          <span slot="title"><router-link :to="{ path: '/tech/git' }">GIT</router-link></span>
        </el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title"><router-link to="music">音乐</router-link></span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document" />
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
