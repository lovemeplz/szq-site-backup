<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <LSidebar />
      </el-aside>
      <el-container>
        <el-header>
          <LHeader />
        </el-header>
        <el-main>
          <div class="main-container">
            <router-view ref="router_view" />
          </div>
        </el-main>
        <el-footer>
          <LFooter />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LHeader from './components/header'
import LSidebar from './components/sidebar'
import LFooter from './components/footer'
import clipboard from '@/directive/clipboard'

export default {
  name: 'Layout',
  components: {
    LHeader,
    LSidebar,
    LFooter
  },
  directives: {
    clipboard
  },
  data() {
    return {
    }
  },
  methods: {
    clipboardSuccess(success) {
      console.log('env', process.env.NODE_ENV)
    },
    handleGetcontent(val) {
      console.log('val', val)
    },
    handleSetcontent() {
      console.log('set!!')
      this.value = 'ppp'
    }
  }
}
</script>

<style lang="scss">
.layout{
  width: 100%;
  height: 100%;
  .el-header{
    padding: 0;
    .layout-header{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #FFFFFF;
      box-shadow: 0 1px 3px #1a1a1a1a;
      background-clip: content-box;
    }
  }
  .layout-sidebar{
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #545c64;
    .el-menu{
      border: 0;
    }
  }
  .layout-footer{
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #545c64;
  }
}
</style>
