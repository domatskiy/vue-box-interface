<template>
    <div id="app">
        <ui-box title="Box DEMO 1">
            content
		</ui-box>
		
		<ui-box title="Box DEMO 2 (toggle)" :toggle="true" id="box2">
            content
		</ui-box>
    </div>
</template>

<script>
    export default {
      name: 'app',
      components: {},
      data () {
        return {}
      }
    }
</script>