<script setup lang="ts">
import { ref, reactive } from 'vue'

const act = ref(false)
//
function showMeng() {
  act.value = !act.value
  console.log(act.value)
}
</script>

<template>
  <div class="locking" v-show="act">
    <div class="locking-con">
      <div class="locking-con-main" @click="showMeng()">
        <div class="locking-con-title">屏幕已锁定</div>
        <div class="locking-con-cont">如果需解锁请点击按钮</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.locking {
  position: fixed;
  left: 150px;
  top: 0;
  background: rgb(0, 0, 0, 0.3);
  width: 1130px;
  height: 720px;

  &-con {
    width: 400px;
    height: 190px;
    margin-left: 300px;
    margin-top: 200px;
    border-radius: 10px;
    background: #f3f6fe;

    &-title {
      margin-left: 100px;
      margin-top: 42px;
      color: #364561;
      font-family: PingFang SC;
      font-weight: heavy;
      font-size: 40px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
    }

    &-cont {
      margin-top: 14px;
      margin-left: 80px;
      color: #364561;
      font-family: PingFang SC;
      font-weight: medium;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
    }
  }
}

.activesty {
}
</style>
