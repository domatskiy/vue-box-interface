const boxUIPlugin = {
  install (VueInstance, options) {
    VueInstance.component('box-ui', require('./Components/Box.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(boxUIPlugin)
}

export default boxUIPlugin
