<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="main">
    <div class="mainContent">
      <div class="mainImg"></div>
      <div class="mainText">紧急停止</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: fixed;
  background: rgb(0, 0, 0, 0.1);
  width: 1280px;
  height: 720px;
  .mainContent {
    margin-left: 530px;
    margin-top: 50px;
    width: 265px;
    height: 95px;
    border-radius: 10px;
    background: #f3f6fe;

    display: flex;
    flex-direction: row;
    .mainImg {
      margin-left: 40px;
      margin-top: 20px;
      width: 60px;
      height: 54px;
      background-image: url('../../assets/picture/AlarmSmall.png');
    }
    .mainText {
      margin-top: 30px;
      line-height: 95px;
      color: #364561;
      font-family: PingFang SC;
      font-weight: heavy;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 20px;
    }
  }
}
</style>
