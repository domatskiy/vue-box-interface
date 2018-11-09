<template>
    <div id="app">
        <ui-box title="Box DEMO 1">
            content
            <div slot="header">
                <button>action</button>
            </div>
            <div slot="footer">footer content</div>
		</ui-box>

		<ui-box title="Box DEMO 2 (toggle)" :toggle="true" id="box2">
            content
            <div slot="header">
                <button>action</button>
            </div>
            <div slot="footer">footer content</div>
		</ui-box>

        <ui-box title="Box DEMO 3 (toggle)" :toggle="true" id="box3">
            content
            <div slot="header">header content</div>
            <div slot="footer">footer content</div>
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
