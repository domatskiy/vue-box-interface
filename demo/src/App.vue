<template>
    <div id="app">
        <ui-box title="Box DEMO">
            content
		</ui-box>
		
		<ui-box title="Box DEMO 2">
            content
		</ui-box>
    </div>
</template>

<script>
    import Vue from 'vue'
    import UIBox from 'plugin'
    Vue.use(UIBox)

    export default {
      name: 'app',
      components: {},
      data () {
        return {}
      }
    }
</script>