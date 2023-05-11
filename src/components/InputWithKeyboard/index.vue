<script setup>
import { ref } from 'vue'
import v2keyboard from '../../keyboard/v2keyboard.vue'
defineProps({
  modelValue: {
    type: [String, Number],
  },
  inputType: {
    type: String,
    default: 'text',
  },
})
const emit = defineEmits([
  'update:modelValue',
  'onKeyBoardChange',
  'onKeyPress',
])
function inputChange(e) {
  emit('update:modelValue', e.target.value)
}
function onKeyboardChange(e) {
  emit('onKeyBoardChange', e)
  emit('update:modelValue', e)
}
function onKeyPress(e) {
  console.log(e)
  if (e == 'close') {
    show.value = false
  }
  emit('onKeyPress', e)
}
function showKeyboard() {
  console.log('显示')
  show.value = true
}
function closeKeyboard() {
  console.log('隐藏')
  // console.log(this.modelValue)
  show.value = false
}
const show = ref(false)
const keyboardClass = 'keyboardClass' + '_' + (Math.random() * 1000).toFixed(0)
</script>
<template>
  <input
    class="inputSty"
    :type="inputType"
    :value="modelValue"
    @input="inputChange"
    @focus="showKeyboard" />
  <button @click="closeKeyboard" class="butSty">关闭</button>
  <!-- 键盘 -->
  <v2keyboard
    v-if="show"
    :keyboardClass="keyboardClass"
    @onChange="onKeyboardChange"
    @onKeyPress="onKeyPress"
    :input="modelValue"
    type="number"
    class="v2keyboard"></v2keyboard>
</template>

<style lang="scss" scoped>
.inputSty {
  width: 125px;
  height: 50px;
  background: #47628f;
}
.butSty {
  background: #47628f;
}
</style>
