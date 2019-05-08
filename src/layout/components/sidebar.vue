<template>
  <div class="layout-sidebar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link to="/tech">
        <el-menu-item index="1">
          <i class="el-icon-menu" />
          导航一
        </el-menu-item>
      </router-link>
      <router-link to="/music">
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          导航二
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
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
