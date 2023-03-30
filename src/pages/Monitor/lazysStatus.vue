<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
let timeCount = ref(225)
let showDialog = ref(true)
const timer = ref()
const count = ref()

onMounted(() => {
  showDialog.value = true
  timer.value = setInterval(() => {
    timeCount.value--
    if (timeCount.value === 0) {
      showDialog.value = false
      clearInterval(timer.value)
    }
  }, 1000)
})
</script>

<template>
  <div class="main" v-show="showDialog">
    <div class="main-content">
      <div class="main-content-text">激光状态正常({{ timeCount }}s)</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: fixed;
  width: 1280px;
  height: 740px;
  left: 0;
  top: 0;
  background: rgb(0, 0, 0, 0.3);
  &-content {
    position: relative;
    width: 400px;
    height: 190px;
    margin-top: 250px;
    margin-left: 440px;
    border-radius: 10px;
    background: #f3f6fe;
    &-text {
      color: #364561;
      font-family: PingFang SC;
      font-weight: heavy;
      font-size: 40px;
      line-height: normal;
      letter-spacing: 0px;
      position: relative;

      text-align: center;

      line-height: 190px;
    }
  }
}
</style>
