<script setup>
import { ref } from 'vue'
import Allnumber from './Allnumber.vue'
import SimpleKeyboard from 'simple-keyboard'

function onChange(params) {
  console.log('change the keyboard')
}
function onKeyPress() {
  console.log('keyboard press')
}
const input = ref('')
</script>
<template>
  <div>
    <!-- <input
      :value="input"
      class="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start" /> -->
    <SimpleKeyboard
      class="Keyboard"
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="input" />
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
}
.keyboard {
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
}
</style>
