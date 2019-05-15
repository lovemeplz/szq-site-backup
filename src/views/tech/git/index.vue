<template>
  <div class="views-git">
    <el-card v-for="(i, index) in 11" :key="index" class="box-card" shadow="hover" @click="handleCheck">
      <div slot="header" class="clearfix">
        <span @click="handleCheck">卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Git',
  methods: {
    handleCheck() {
      console.log('check')
      this.$router.push('/tech/git/check')
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
