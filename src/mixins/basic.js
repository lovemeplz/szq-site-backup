export const basicMixin = {
  provide() {
    return {
      Page: this
    }
  },
  mounted() {
    if (this.$options.name) {
      this.$el.classList.add(this.$options.name || '')
    }
  },
  methods: {
    listenCall() {
      return ''
    }
  }
}
