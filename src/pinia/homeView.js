import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sendSock, createWebSocket, closeSock } from '../utils/websocket'
export const generReference = defineStore('generReference', () => {
  // websocket接收到的参数
  const websocketLIstanbul = ref({})

  // 初始化websocket
  createWebSocket(global_callback)
  // 接受到数据
  function global_callback(msg) {
    // console.log('接收到websocket' + JSON.stringify(msg))
    console.log(msg)
    // console.log(23123)
    websocketLIstanbul.value = msg
    // console.log('pinia')
    // console.log(websocketLIstanbul.value)
    // console.log(websocketLIstanbul.value.laserAlarm)
  }

  // 发送数据
  var senData = {
    // JSON.stringify(msg)
    data: 3,
  }
  sendSock(JSON.stringify(senData))
  return { websocketLIstanbul }
})
