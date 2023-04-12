<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import Header from './layout/Header.vue'
import tarbar from './layout/tarbar.vue'
import Locking from './pages/Locking/index.vue'

import v2keyboard from './keyboard/v2keyboard.vue'
// import SimpleKeyboard from 'simple-keyboard'
// import wcKeyBoard from ''
// import keyboard from './keyboard/index.vue'

import { sendSock, createWebSocket, closeSock } from './utils/websocket'

const showLockingView = ref(false)

function unLocking() {
  showLockingView.value = !showLockingView.value
}

function test(e) {
  console.log(e.data)
}

// 锁定按钮触发
const Btnlocking = ref(true)

const projectId = ref({})

// 紧急停止
const EmergencyTime = ref(true)

//  键盘显示
// const keyboardZHshow = ref(true)
// function showZhkeyboard() {
//   keyboardZHshow.value = !keyboardZHshow.value
// }
onMounted(() => {})
</script>

<template>
  <div>
    <!-- 主体内容 -->
    <Header></Header>
    <!-- 内容部分 -->
    <div class="mainContent">
      <!-- 导航栏 -->
      <div>
        <tarbar></tarbar>
        <div @click="unLocking()" class="lockingbtn">
          <div class="lockingbtnicon"></div>
          <div class="text">锁定</div>
        </div>
      </div>
      <!-- 显示页面 -->
      <router-view></router-view>
      <!-- <Mainboard></Mainboard> -->
      <!-- <Allnumber></Allnumber> -->
      <!-- <SimpleKeyboard></SimpleKeyboard> -->
      <!-- <v2keyboard></v2keyboard> -->
      <Locking
        v-show="showLockingView"
        @click="unLocking()"
        :class="showLockingView ? '' : 'aclockingbtn'"></Locking>
      <!-- <v2keyboard v-if="keyboardZHshow" class="v2keyboard"></v2keyboard> -->
    </div>

    <!-- <Emergency class="emergency"></Emergency> -->
  </div>
</template>

<style scoped lang="scss">
.mainContent {
  display: flex;
  flex-direction: row;
  position: absolute;
}
.lockingbtn {
  width: 140px;
  height: 75px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 10px;
  .lockingbtnicon {
    height: 23px;
    width: 23px;
    margin-top: 5px;
    background-image: url('./assets/icons/ilock.png');
  }
  .text {
    margin-left: 10px;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: medium;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0px;
    text-align: left;
  }
}
.emergency {
  position: fixed;
  height: 720px;
  // margin: 0px;
}
.v2keyboard {
  position: fixed;
}
</style>
