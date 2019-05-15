<template>
  <div class="views-git">
    <router-view />
    <el-card v-for="(i, index) in 11" v-show="showCardList" :key="index" class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span @click="handleCheck2">标题</span>
        <el-dropdown style="float: right">
          <span class="el-dropdown-link">
            <i class="el-icon-more" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>编辑</el-dropdown-item>
            <el-dropdown-item>发布</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="text item">
        列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容
      </div>
      <div class="footer">
        <div class="status">
          <span class="dot" />
          <div class="text">已发布</div>
        </div>
        <div class="time">
          2018/12/23 12:32:12
        </div>
      </div>
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
      .el-card__body{
        .text{
          font-size: 12px;
          line-height: 1.4s;
          overflow: hidden;
          -webkit-line-clamp: 4; // 仅显示两行就写3
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .footer{
          margin-top: 28px;
          display: flex;
          .status{
            display: flex;
            justify-content: center;
            .dot{
              display: block;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: green;
              margin-right: 8px;
            }
            .text{
              font-size: 12px;
            }
          }
          .time{
            flex: 1;
            color: #ccc;
            text-align: right;
          }
        }
      }
    }
  }
</style>
