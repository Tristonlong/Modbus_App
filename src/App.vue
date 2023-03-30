<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import Header from './layout/Header.vue'
import tarbar from './layout/tarbar.vue'
import Locking from './pages/Locking/index.vue'
// import { initWebSocket } from './utils/websocket'
import { sendSock, createWebSocket, closeSock } from './utils/websocket'

const showLockingView = ref(true)

function unLocking() {
  showLockingView.value = !showLockingView.value
}

function test(e) {
  console.log(e.data)
}

// 锁定按钮触发
const Btnlocking = ref(true)

const projectId = ref({})

onMounted(() => {
  // initWebSocket()
  // 初始化websocket
  // createWebSocket(global_callback)
  // // 接受到数据
  // function global_callback(msg) {
  //   // console.log('接收到websocket' + JSON.stringify(msg))
  //   // console.log(123)
  //   // console.log(msg)
  //   // projectId.value = msg
  //   // console.log(websocketLIstanbul.value)
  //   // console.log(websocketLIstanbul.value.laserAlarm)
  // }
  // // 发送数据
  // var senData = {
  //   // JSON.stringify(msg)
  //   data: 23,
  // }
  // sendSock(JSON.stringify(senData))
})
</script>

<template>
  <!-- <router-link to="/about">123</router-link>
                                               -->
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
      <Locking
        v-show="showLockingView"
        @click="unLocking()"
        :class="showLockingView ? '' : 'aclockingbtn'"></Locking>
    </div>
    <!-- <MainPage></MainPage> -->
  </div>
</template>

<style scoped lang="scss">
.mainContent {
  display: flex;
  flex-direction: row;
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
</style>
