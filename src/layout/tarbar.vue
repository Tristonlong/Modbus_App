<script setup>
import { ref } from 'vue'
import router from '../router'

import icon1 from '../assets/icons/Vector.png'
import icon2 from '../assets/icons/ireference.png'
import icon3 from '../assets/icons/isetting.png'
import icon4 from '../assets/icons/ispy.png'
import icon5 from '../assets/icons/iconnecting.png'
import icon6 from '../assets/icons/ihelp.png'
// import icon7 from '../assets/icons/ilock.png'
import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const barList = ref([
  { name: 'HomeView', title: 'homeView', iconurl: icon1 },
  { name: 'Reference', title: 'reference', iconurl: icon2 },
  { name: 'Setting', title: 'setting', iconurl: icon3 },
  { name: 'Monitor', title: 'spy', iconurl: icon4 },
  { name: 'Connecting', title: 'link', iconurl: icon5 },
  { name: 'Help', title: 'help', iconurl: icon6 },
  // { name: 'Locking', title: 'lock', iconurl: icon7 },
])
function show(n) {
  // n = name
  router.push({ path: `/pages/${n}` })
}

const activeBtn = ref(0)
// 点击样式激活
function showActbtn(number) {
  if (number !== activeBtn.value) {
    activeBtn.value = number
  }
}
</script>
<template>
  <div class="mainTarbar">
    <div
      class="mainTarbar"
      v-for="(item, index) in barList"
      :key="index"
      @click="show(item.name)">
      <div class="mainTarbar-icon"></div>
      <div
        :class="{ mainTarbarAct: index === activeBtn }"
        class="mainTarbar-item"
        @click="showActbtn(index)">
        <div class="mainTarbar-item-text">
          <img class="mainTarbar-item-text-icon" :src="item.iconurl" alt="" />
          {{ $t(item.title) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainTarbar {
  height: 529px;
  width: 130px;
  display: flex;
  flex-direction: column;

  // background-image: url('../assets/icons/Vector.png');
  &-item {
    &-text {
      height: 70px;
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: medium;
      font-size: 20px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: center;
      margin: 50%, 50%;
      display: flex;
      align-items: center;
      text-align: center;

      &-icon {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  &-icon {
  }

  &-active {
    border-radius: 0px 6px 6px 0px;
    background: #364561;
    box-shadow: 0px 10px 10px 0px #00000033;
  }
}

.mainTarbarAct {
  border-radius: 0px 6px 6px 0px;
  background: #364561;
  box-shadow: 0px 10px 10px 0px #00000033;
  margin-right: 10px;
}
</style>
