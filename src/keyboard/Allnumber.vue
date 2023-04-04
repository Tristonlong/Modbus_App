<script setup>
import { onMounted, ref } from 'vue'
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

const keyboard = null
const props = defineProps({
  keyboardClass: {
    type: String,
    default: 'simple-keyboard',
  },
  input: {
    type: String,
  },
})
onMounted(() => {
  this.keyboard = new Keyboard(this.keyboardClass, {
    onChange: this.onChange,
    onKeyPress: this.onKeyPress,
  })
})

function onChange(input) {
  this.$emit('onChange', input)
}
function onKeyPress(button) {
  this.$emit('onKeyPress', button)
  if (button === '{shift}' || button === '{lock}') this.handleShift()
}
function handleShift() {
  let currentLayout = this.keyboard.options.layoutName
  let shiftToggle = currentLayout === 'default' ? 'shift' : 'default'

  this.keyboard.setOptions({
    layoutName: shiftToggle,
  })
}
watch(props.input, (newV, oldV) => {
  console.log(newV), oldV
})
</script>
<template>
  <div :class="keyboardClass"></div>
</template>

<style lang="scss" scoped></style>
