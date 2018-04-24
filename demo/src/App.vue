<template>
    <div id="app">
        <box-ui title="Box DEMO">
            content
		</box-ui>
		
		<box-ui title="Box DEMO 2">
            content
		</box-ui>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Box from 'plugin'

    Vue.use(Box)

    export default {
      name: 'app',
      components: {},
      data () {
        return {}
      }
    }
</script>
<style lang="less">
  
</style>