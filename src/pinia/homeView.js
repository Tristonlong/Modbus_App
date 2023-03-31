import { defineStore } from 'pinia'
import { ref, reactive, toRefs } from 'vue'
import { sendSock, createWebSocket, closeSock } from '../utils/websocket'
export const generReference = defineStore('generReference', () => {
  // websocket接收到的参数
  const websocketLIstanbul = reactive({
    laserSwitch: true,
    pullFocus: true,
    manualBlowing: true,
    fishWeld: true,
    sendSiSwitch: true,
    safetyLock: false,
    laserAlarm: false,
    communicationAlarm: false,
    lensAlarm: false,
    safetyGasAlarm: false,
    laserPower: 22001,
    laserFrequency: 1,
    laserPrecent: 1,
    swingAmplitude: 1,
    swingFrequency: 1,
    swingPicture: 1,
    deviceTemperature: 1,
    gunTemperature: 1,
    timelyGas: 1,

    gunSwitch: false,
    safetyLocking: true,
    lensIo: true,
    laserEPower: true,
    gasSwitch: true,
    sendSi: true,
    coldDeviceAlarm: false,
    spyIcon: true,
    laserFaultNumber01: true,
    laserFaultNumber70: true,
    laserVoltage: 1,
    laserOnceTime: 1,
    laserAllTime: 1,
    firmwareVersion: 1,
    boardVersion: 1,

    laserAlarmLevel: 1,
    referenceReset: 1,
    blowairBefore: 1,
    blowairDelay: 1,
    offDelay: 1,
    onPower: 1,
    offPower: 1,
    risingTime: 1,
    lowerTime: 1,
    laserMaxPower: 1,
    fishWeldWorkTime: 1,
    fishWeldUnworkTime: 1,
    copperMouthRelaxTime: 1,
    safetyTimeDoubleClick: 1,
    workingModel: 1,

    swingSwitch: true,
    xaxisCenterOffset: 1,
    xaxisEnlarge: 1,
    yaxisCenterOffset: 1,
    yaxisEnlarge: 1,
    graphicsRotationAngle: 1,

    runtimeZero: 1,

    motorDirertion: true,
    pointSendSi: true,
    pointBackSi: true,
    sendSiSpeed: 1,
    chouSiSpeed: 1,
    buSiLength: 1,
    chouSiLength: 1,
    songSiDelay: 1,
    buSiDelay: 120,
    goStep: 1,
  })

  // 报警信息
  const WarmInform = ref([])

  WarmInform.value = ['湿度过高(8)', '水冷机互锁故障（10）', '']

  // 初始化websocket
  createWebSocket(global_callback)
  // 接受到数据
  function global_callback(msg) {
    // console.log('接收到websocket' + JSON.stringify(msg))
    console.log(msg)
    // console.log(23123)
    // websocketLIstanbul.value = msg
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
  return {
    ...toRefs(websocketLIstanbul),
    // websocketLIstanbul,
    WarmInform,
  }
})
