<script setup lang="ts">
import { ref, reactive } from 'vue'

const active = ref(true)

function showpic() {
  active.value = !active.value
}
</script>

<template>
  <div class="contentAlertJG" v-show="active">
    <div class="contentAlertJG-con" :class="active ? 'activesty' : ''">
      <div class="contentAlertJG-con-text">激光发出中，请注意安全</div>
      <div class="contentAlertJG-con-img"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contentAlertJG {
  position: fixed;
  left: 0;
  top: 0;
  background: rgb(0, 0, 0, 0.3);
  width: 1280px;
  height: 740px;

  &-con {
    position: relative;
    width: 600px;
    height: 375px;
    margin-top: 180px;
    margin-left: 25%;
    border-radius: 10px;
    background: #f3f6fe;

    &-text {
      margin-top: 20px;
      color: #364561;
      font-family: PingFang SC;
      font-weight: heavy;
      font-size: 40px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: center;
    }

    &-img {
      margin-top: 30px;
      margin-left: 184px;
      height: 205px;
      width: 230px;
      background-image: url('../../assets/picture/alarm.png');
    }
  }
}

.activesty {
}
</style>
