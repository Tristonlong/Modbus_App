<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

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
watchEffect(props.input, (newV, oldV) => {
  console.log(newV), oldV
})
</script>
<template>
  <div :class="keyboardClass"></div>
</template>

<style lang="scss" scoped></style>
