<script setup>
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
// console.log(t('asd'))
const lauArr = [
  { name: '中文', value: 'zh-CN' },
  { name: 'Engliash', value: 'en-US' },
]
function chanLau(v) {
  if (v == locale.value) {
    return
  }
  locale.value = v
  localStorage.setItem('LauType', v)
}
</script>

<template>
  <div class="mainTitle">
    <div class="mainTitle-logo"></div>
    <div class="mainTitle-content">{{ t('headerTitle') }}</div>

    <div class="mainTitle-button">
      <div
        v-for="item in lauArr"
        :key="item.value"
        @click="chanLau(item.value)"
        :class="[locale == item.value ? 'active' : '']"
        class="mainTitle-button-fir">
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainTitle {
  width: 1230px;
  height: 100px;
  display: flex;
  flex-direction: row;

  &-button {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 50px;
    &-fir {
      width: 100px;
      margin-right: 20px;
      border-radius: 6px;
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 20px;
      line-height: 50px;
      letter-spacing: 0px;
      margin-left: 10px;
      box-shadow: 0px 4px 4px 0px #0000003f;
      border-radius: 6px;
      background: #364561;
    }
  }
  &-logo {
    width: 64px;
    height: 60px;
    background-image: url('../assets/picture/logo.png');
    margin-left: 20px;
    margin-top: 20px;
  }
  &-content {
    margin-top: 20px;
    width: 950px;
    text-align: center;
    // margin: auto;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 30px;
    line-height: normal;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 32px;
  }
}

.active {
  border-radius: 6px;
  background: #07a96b;
}
</style>
