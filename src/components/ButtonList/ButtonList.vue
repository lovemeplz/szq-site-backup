<script>
export default {
  name: 'ButtonList',
  inject: {
    Page: {
      default: ''
    }
  },
  props: {
    optBtns: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    baseOptions(item) {
      const newItem = Object.assign({}, item)
      delete item.class
      delete item.methods

      const opts = {
        on: {},
        attrs: {
          ...item
        }
      }

      if (item.ref) {
        opts.ref = item.ref
      }
      // 支持传入自定义class
      if (newItem.hasOwnProperty('class')) {
        opts.class = newItem.class || []
      }
      if (newItem.hasOwnProperty('methods')) {
        opts.on['click'] = this.Page[newItem.methods]
      }
      return opts
    }
  },
  render(h) {
    return (
      <div class='button-list'>
        {
          this._l(this.optBtns, item => {
            const { icon, svgIcon, label, ...rest } = item
            const opts = this.baseOptions(rest)
            const labelPart = label && this._v(this._s(item.label))
            const svgPart = svgIcon && h('svg-icon', { attrs: { 'icon-class': svgIcon }})
            const iconPart = icon && h('i', { class: [icon] })
            const children = [svgPart || iconPart, labelPart]
            return h('el-button', opts, children)
          })
        }
      </div>
    )
  }
}
</script>

<style>

</style>
