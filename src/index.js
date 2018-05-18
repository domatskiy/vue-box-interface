import UiBox from './Components/Box.vue'

const UIBoxPlugin = {
  install (Vue, options = {}) {
    Vue.component(UiBox.name, UiBox)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(UIBoxPlugin)
}

export default UIBoxPlugin
