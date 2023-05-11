<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

export default {
  name: 'SimpleKeyboard',
  props: {
    keyboardClass: {
      default: 'simple-keyboard',
      type: String,
    },
    input: {
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    //
    if (this.type == 'text') {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
      })
    } else {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        layout: {
          default: ['1 2 3', '4 5 6', '7 8 9', '{shift} 0', '{bksp} '],
          shift: ['! / #', '$ % ^', '& * (', '{shift} ) +', '{bksp} '],
        },
      })
    }
  },
  methods: {
    onChange(input) {
      this.$emit('onChange', input)
    },
    onKeyPress(button) {
      this.$emit('onKeyPress', button)

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === '{shift}' || button === '{lock}') this.handleShift()
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName
      let shiftToggle = currentLayout === 'default' ? 'shift' : 'default'

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      })
    },
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboardClass {
  position: fixed;
  /* background-color: aqua; */
  left: 20;
  top: 0;
  width: 200px;
  height: 100px;
  /* background-color: red; */
}
</style>
