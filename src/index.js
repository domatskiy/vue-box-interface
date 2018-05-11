import BoxUi from './Components/Box.vue'

const boxUIPlugin = {
  install (VueInstance, options) {
    VueInstance.component(BoxUi.name, BoxUi)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(boxUIPlugin)
}

export default boxUIPlugin
