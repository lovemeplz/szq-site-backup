<template>
  <footer class="layout-footer">copy @ 2018<span class="fr mr5">版本: v {{ VUE_APP_VERSION }}</span></footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      VUE_APP_VERSION: process.env.VUE_APP_VERSION || '1.0.0'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~@/styles/variable.scss";
  .layout-footer{
    width: 100%;
    height: $footerHeight;
    line-height: $footerHeight;
    text-align: center;
    color: $-color-white;
    background: $footerBgColor;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

