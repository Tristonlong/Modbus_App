import { defineStore } from 'pinia'
import { ref, reactive, toRefs } from 'vue'
// import { getMetersValue } from '../sever/modbus'
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
    songSiSpeed: 1,
  })

  //
  const initial = [
    {
      number: 1,
      bancai: 20,
      houdu: 30,
      laserPower: 2000,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 2,
      bancai: 20,
      houdu: 30,
      laserPower: 2240,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 3,
      bancai: 20,
      houdu: 30,
      laserPower: 1240,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 4,
      bancai: 20,
      houdu: 30,
      laserPower: 3040,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 5,
      bancai: 20,
      houdu: 30,
      laserPower: 1640,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 6,
      bancai: 20,
      houdu: 30,
      laserPower: 5140,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
    {
      number: 7,
      bancai: 20,
      houdu: 30,
      laserPower: 1040,
      zhankongbi: 40,
      pinglv: 20,
      baifu: 20,
      baidongpinglv: 50,
      songsisudu: 20,
      beizhu: 10,
    },
  ]
  const params = ref(JSON.parse(JSON.stringify(initial)))
  const selectedId = ref(1)
  // 工艺参数
  // 报警信息
  const WarmInform = ref([])

  selectedId.value = initial.number

  WarmInform.value = [
    '湿度过高(8)',
    '水冷机互锁故障（10）',
    '互锁故障（11）',
    'QBH（12）',
    '面板急停（13）',
    '时间锁死（14）',
    'FPGA通讯故障（15）',
    '硬件故障（16）',
    '4G模块未初始化（17）',
    '输入频率过高（18）',
    'PD1故障（21）',
    'PD2故障（22）',
    'PD3故障（23）',
    'PD4故障（24）',
    'PD连续故障3次锁死（25）',
    '温差故障（30）',
    '温度1下限（31）',
    '温度2下限（32）',
    '温度3下限（33）',
    '温度4下限（34）',
    '温度1上限（35）',
    '温度2上限（36）',
    '温度3上限（37）',
    '温度4上限（38）',
    '驱动1过流（51）',
    '驱动2过流（52）',
    '驱动3过流（53）',
    '驱动4过流（54）',
    '驱动5过流（55）',
    '驱动6过流（56）',
    '驱动7过流（57）',
    '驱动8过流（58）',
    '驱动9过流（40）',
    '驱动10过流（41）',
    '驱动11过流（42）',
    '驱动12过流（43）',
    '驱动13过流（44）',
    '驱动14过流（45）',
    '驱动15过流（46）',
    '驱动16过流（47）',
    '驱动17过流（48）',
    '驱动18过流（49）',
    '24V电压异常（60）',
    ' 3.3V高电压故障（61）',
    ' 5V高电压故障（62）',
    ' 12V高电压故障（63）',
    ' 48V高电压故障（64）',
    ' 3.3V低电压故障（65）',
    ' 5V低电压故障（66）',
    ' 12V低电压故障（67）',
    ' 48V低电压故障（68）',
    '过流保护(71)',
    '风扇故障(72)',
    '过压保护(73)',
    '整流器故障(74)',
    '过热(75)',
    '交流输入故障(76)',
    '直流输出故障(77)',
    '驱动板1开路(101)',
    '驱动板2开路(102)',
    '驱动板3开路(103)',
    '驱动板4开路(104)',
    '驱动板5开路(105)',
    '驱动板6开路(106)',
    '驱动板7开路(107)',
    '驱动板8开路(108)',
    '驱动板9开路(109)',
    '驱动板10开路(110)',
    '驱动板11开路(111)',
    '驱动板12开路(112)',
  ]
  const setGonyi = ref(1)
  // 初始化websocket
  createWebSocket(global_callback)
  // 接受到数据
  function global_callback(msg) {
    // console.log('接收到websocket' + JSON.stringify(msg))
    console.log(msg)
  }

  // 发送数据
  var senData = {
    // JSON.stringify(msg)
    data: 3,
  }
  sendSock(JSON.stringify(senData))

  function resetParams() {
    // 深拷贝
    params.value = JSON.parse(JSON.stringify(initial))
  }

  return {
    selectedId,
    params,
    setGonyi,
    ...toRefs(websocketLIstanbul),
    // websocketLIstanbul,
    WarmInform,
    resetParams,
    initial,
  }
})
