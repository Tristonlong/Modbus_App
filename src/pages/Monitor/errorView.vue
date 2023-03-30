<script setup>
import { ref, onMounted } from 'vue'
let timeCount = ref(5)
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
      <div class="main-content-text">屏幕已锁定({{ timeCount }}s)</div>
      <div class="main-content-article">温度过高(8)</div>
      <div class="main-content-article">互锁故障(8)</div>
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
      //   line-height: 190px;
      //   margin-top: 120px;
    }
    &-article {
      color: #364561;
      font-family: PingFang SC;
      font-weight: medium;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 20px;
      margin-left: 120px;
    }
  }
}
</style>
