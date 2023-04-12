<script setup lang="ts">
import { ref } from 'vue'

let text = ref('')
let hoverState = ref(true)
//
const emits = defineEmits(['click'])
function clickButton() {
  emits('click')
}
</script>
<template>
  <div
    class="custom-button"
    :hover-class="hoverState ? '' : ''"
    @click="clickButton">
    <slot nmae="top">
      <div class="custom-button-top"></div>
    </slot>
    <slot name="bottom">
      <div class="custom-button-bottom" v-if="text">
        <text class="custom-button-bottom-text">{{ text }}</text>
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-button {
}
</style>
