<template>
  <div class="views-music">
    <ButtonList :opt-btns="optBtns" />
  </div>
</template>

<script>
import ButtonList from '@/components/ButtonList/ButtonList'
import { basicMixin } from '@/mixins/basic'
export default {
  components: {
    ButtonList
  },
  mixins: [basicMixin],
  data() {
    return {
      optBtns: [
        { label: '按钮1', class: 'btn1 btn11', methods: 'handleBtn1', icon: 'el-icon-edit', test: '123' },
        { label: '按钮2', class: 'btn2', size: 'mini', type: 'danger', svgIcon: 'bug', disabled: true }
      ]
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
