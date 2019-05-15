<template>
  <div class="views-git">
    <router-view />
    <el-card v-for="(i, index) in 11" v-show="showCardList" :key="index" class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span @click="handleCheck2">卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click.native="handleCheck">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>s
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Git',
  computed: {
    showCardList() {
      return this.$route.path === '/tech/git'
    }
  },
  methods: {
    handleCheck() {
      this.$router.push('/tech/git/check')
    },
    handleCheck2() {
      this.$router.push('/tech/git/add')
    }
  }
}
</script>

<style lang="scss">
  .views-git{
    width: 94%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    .box-card{
      width: 360px!important;
      margin-top: 20px;
      cursor: pointer;
    }
  }
</style>
