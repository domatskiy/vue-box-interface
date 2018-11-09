<template>
    <div class="ui-box" :class="[toggleEnabled ? 'ui-box--toggle' : '', open ? 'ui-box--open' : 'ui-box--close']">
        <div class="ui-box__header">
            <div class="ui-box__title" v-if="title">{{title}}</div>
            <div class="ui-box__buttons">
                <slot name="header"></slot>
            </div>
            <button class="ui-box__toggle"
                v-if="toggleEnabled"
                :class="open ? 'ui-box__toggle--open' : ''"
                @click="toggleBox($event)"></button>
        </div>
        <div class="ui-box__body" v-if="open">
            <slot></slot>
        </div>
        <div class="ui-box__footer" v-if="open && showFooter === true">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
var ls = require('local-storage')
import UIBoxBus from './UIBoxBus'

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
      showFooter: false,
      open: true
    }
  },
  methods: {
    toggleBox: function (e) {
      e.preventDefault()
      e.stopPropagation()
      this.open = !this.open
      ls.set(this.key, this.open)
      if (this.open) {
        UIBoxBus.$emit('box-open', this.key)
        this.$emit('open')
      } else {
        UIBoxBus.$emit('box-close', this.key)
        this.$emit('close')
      }
      UIBoxBus.$emit('box-toggle', this.open, this.key)
    }
  },
  created: function () {
    if (this.toggle === true && !this.id) {
      console.warn('set id for toggle box')
    }
  },
  mounted: function () {
    if (this.toggle === true && this.id) {
      this.toggleEnabled = true

      let open = ls.get(this.key) - 0
      if (open !== null) {
        this.open = open
      }
    }
  },
  updated: function () {
    this.showFooter = typeof this.$slots.footer === 'object'
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
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

            padding: 15px 0 15px;
            margin: 0 15px;
            border-bottom: 1px solid #ccc;

            -webkit-box-pack: justify;
            -ms-flex-pack: justify;

            justify-content: space-between;
            -webkit-justify-content: space-between;

            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            flex-wrap: nowrap;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;

            position: relative;
        }

        &__title {
            margin: 0;
            padding: 0 15px 0 0;
            font-size: 18px;
        }

        &__buttons {
            margin: 0;
            padding: 0 0px 0 0;
            font-size: 18px;
        }

        &__toggle {
            box-shadow: none;
            position: absolute;
            width: 15px; height: 15px;
            top: 50%;
            margin-top: -7px;
            right: 0;
            background: transparent;
            padding: 0;
            cursor: pointer;
            border: 2px solid #ccc;
            outline: none;
            transition: height 0.3s linear, margin-top 0.3s linear;

            &--open{
              border-width: 1px;
              height: 0;
              margin-top: 0;
              transition: height 0.3s linear, margin-top 0.3s linear;
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

        &__footer {

            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;

            padding: 10px 0;
            margin: 0 15px;
            transition: height 0.3s linear;
            border-top: 1px solid #cecece;
        }

        &--toggle{
            .ui-box {
                &__buttons {
                    padding: 0 30px 0 0;
                }
            }
        }

        &--close {

            .ui-box__header {
                border-bottom: 0;
            }

            .ui-box__body {
                overflow: hidden;
                height: 0;
                padding-top: 0;
                padding-bottom: 0;
                transition: height 0.5s linear,
                            padding 0.5s linear;
            }

        }

    }

</style>
