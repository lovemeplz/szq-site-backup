<template>
  <div class="views-music">
    <ButtonList :opt-btns="optBtns" />
    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" :content="tooltip">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
    </el-tooltip>
  </div>
</template>

<script>
import ButtonList from '@/components/ButtonList/ButtonList'
import BackToTop from '@/components/BackToTop'
import { basicMixin } from '@/mixins/basic'
export default {
  components: {
    ButtonList,
    BackToTop
  },
  mixins: [basicMixin],
  data() {
    return {
      optBtns: [
        { label: '按钮1', class: 'btn1 btn11', methods: 'handleBtn1', icon: 'el-icon-edit', test: '123' },
        { label: '按钮2', class: 'btn2', size: 'mini', type: 'danger', svgIcon: 'bug', disabled: true }
      ],
      tooltip: '回到顶部',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
    }
  },
  methods: {
    handleBtn1() {
      console.log('btn1')
    },
    handleBtn2() {
      console.log('btn2')
    }
  }
}
</script>

<style>

</style>
