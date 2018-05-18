<template>
    <div class="ui-box" :class="[toggleEnabled ? 'ui-box--toggle' : '', open ? 'ui-box--open' : 'ui-box--close']">
        <div class="ui-box__header">
            <div class="ui-box__title" v-if="title">{{title}}</div>
            <button class="ui-box__toggle"
                v-if="toggleEnabled"
                :class="open ? 'ui-box__toggle--open' : ''"
                @click="toggleBox($event)"></button>
        </div>
        <div class="ui-box__body" v-if="open">
            <slot>
                <p>пусто</p>
            </slot>
        </div>
    </div>
</template>

<script>
var ls = require('local-storage');

export default {
  name: 'UiBox',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    toggle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      key: 'box-' + this.id,
      toggleEnabled: false,
      open: true
    }
  },
  methods: {
    toggleBox: function (e) {
      e.preventDefault()
      e.stopPropagation()
      this.open = !this.open
      ls.set(this.key, this.open)
      if(this.open)
        this.$emit('open')
      else
        this.$emit('close')
    }
  },
  created: function () {
    if(this.toggle === true && !this.id) {
      console.warn('set id for toggle box')
    }

    if(this.toggle === true && this.id) {
      this.toggleEnabled = true

      let open = ls.get(this.key) - 0
      if(open !== null)
          this.open = open

      console.log(this.key + ' open', closed)
    }

  }
}
</script>

<style lang="less" scope>

    .ui-box {
        border-radius: 5px;
        border-top: 2px solid #CCCCCC;
        background-color: #fff;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

        &__header {
            position: relative;
            box-sizing: border-box;
            display: inline-block;
            width: 100%;
            padding: 15px 15px 0;
        }

        &__title {
            margin: 0;
            padding: 0 0 15px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
        }

        &__toggle {
            box-shadow: none;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            margin-top: -12px;
            right: 15px;
            background: transparent;
            padding: 0;
            cursor: pointer;
            border: 2px solid #ccc;
            outline: none;

            &--open{
              border: 2px solid transparent;
              border-bottom: 2px solid #ccc;
            }
        }

        &__body {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            padding: 15px 15px;
            transition: height 0.3s linear;

            h4{
                margin-top: 0;
                margin-bottom: 5px;
            }
        }


        &--close {

            .ui-box__title {
                border-bottom: 0;
            }

            .ui-box__body {
                overflow: hidden;
                height: 0;
                padding-top: 0;
                padding-bottom: 0;
                transition: height 0.3s linear, padding 0.3s linear;
            }

        }

    }

</style>
