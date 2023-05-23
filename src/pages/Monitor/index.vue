<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
// import lazysStatus from './lazysStatus.vue'
import referView from './referView.vue'
import errorView from './errorView.vue'
import axios from 'axios'
// import { Timer } from 'some-library'
const gunSwitch = ref(true)
const laserAlarm = ref(true)
const coldDeviceAlarm = ref(false)
const communicationAlarm = ref(true)
const lensAlarm = ref(true)
const safetyGasAlarm = ref(true)
const safeLock = ref(false)
const zhenJinIo = ref(false)
const lazysPower = ref(true)
const gasSwitch = ref(false)
const sendSi = ref(false)

const ViewShow = ref(true)
// 刷新
const refresh = ref(false)

// 激光状态
const lazys = ref(false)
function Refe() {
  refresh.value = !refresh.value
  console.log(refresh.value)
}

// 版本固件
// const banben = await

const timer = ref(null)
function LazysChange() {
  lazys.value = !lazys.value
  console.log('再次读取')
  readCoilsInfo(1, 120)
}
// 故障
const unwork = ref(true)

// 固件版本号
const version = ref(1.0)
// 板卡版本号
const banversion = ref(1.5)
const reacCoils = ref([])
// const timer = ref<Timer | null>(null)
onMounted(async () => {
  unwork.value = true
  await readCoilsInfo(1, 120)
  // 固件版本号
  const gujianVersion = await readRegister(31, 2)
  console.log(gujianVersion)
  // 板卡版本号
  const bankaVersion = await readRegister(33, 2)
  console.log(bankaVersion)
  setInterval(async () => {
    await readCoilsInfo(1, 120)
    // 固件版本号
    const gujianVersion = await readRegister(31, 2)
    version.value = gujianVersion.data[0] * 0.01
    // 板卡版本号
    const bankaVersion = await readRegister(33, 2)
    banversion.value = bankaVersion.data[0] * 0.1
    console.log(bankaVersion)
  }, 10000)
})
onUnmounted(() => {
  // clearInterval()
})
// 请求线圈的值
async function readCoilsInfo(startid, num) {
  const responseCoils = await axios.get(`/api/coils/multiple/${startid}/${num}`)
  const coils = responseCoils.data.map(response => response.data)
  console.log(coils)
  // 焊枪开关
  gunSwitch.value = responseCoils.data[8]
  safeLock.value = responseCoils.data[9]
  zhenJinIo.value = responseCoils.data[10]
  lazysPower.value = responseCoils.data[11]
  gasSwitch.value = responseCoils.data[12]
  sendSi.value = responseCoils.data[13]
  laserAlarm.value = responseCoils[14]
  coldDeviceAlarm.value = responseCoils[15]
  safetyGasAlarm.value = responseCoils[17]
}
// 读取寄存器的值
async function readRegister(startid, limit) {
  const response = await axios.get(`/api/registers/${startid}/${limit}`)
  return response
}
</script>

<template>
  <div class="monitor">
    <div class="monitor-input">
      <div class="monitor-input-title">IO状态</div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="gunSwitch ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">焊枪开关</div>
      </div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="safeLock ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">安全地锁</div>
      </div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="zhenJinIo ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">振镜IO</div>
      </div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="lazysPower ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">激光使能</div>
      </div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="gasSwitch ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">气阀</div>
      </div>
      <div class="monitor-input-content">
        <div
          class="monitor-input-content-str"
          :class="sendSi ? '' : 'iconAlarm'"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">送丝</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str1"></div>

        <div class="monitor-input-content-mid"></div>
        <div class="monitor-input-content-end">DA</div>
      </div>
    </div>
    <div class="monitor-output">
      <div class="monitor-output-title">状态</div>
      <div class="monitor-output-content">
        <div
          class="monitor-output-content-sta"
          :class="laserAlarm ? '' : 'iconAlarm'"></div>

        <div class="monitor-output-content-cont">激光器</div>
      </div>
      <div class="monitor-output-content">
        <div
          class="monitor-output-content-sta"
          :class="coldDeviceAlarm ? '' : 'iconAlarm'"></div>

        <div class="monitor-output-content-cont">冷水机</div>
      </div>
      <div class="monitor-output-content">
        <div
          class="monitor-output-content-sta"
          :class="communicationAlarm ? '' : 'iconAlarm'"></div>

        <div class="monitor-output-content-cont">触摸屏-激光卡通讯</div>
      </div>
      <div class="monitor-output-content">
        <div
          class="monitor-output-content-sta"
          :class="lensAlarm ? '' : 'iconAlarm'"></div>

        <div class="monitor-output-content-cont">触摸屏-振镜卡通讯</div>
      </div>
      <div class="monitor-output-content">
        <div
          class="monitor-output-content-sta"
          :class="safetyGasAlarm ? '' : 'iconAlarm'"></div>

        <div class="monitor-output-content-cont">气压</div>
      </div>
    </div>
    <div class="monitor-infor">
      <div class="monitor-infor-cont">
        <div class="monitor-infor-cont-title">信息</div>
        <div class="monitor-infor-cont-content">
          <div class="monitor-infor-cont-content-text">设备编号：1-1-1</div>
          <div class="monitor-infor-cont-content-text">
            本次上电时长：1h1m1s
          </div>
          <div class="monitor-infor-cont-content-text">
            设备总上电时长：2h42m24s
          </div>
          <div class="monitor-infor-cont-content-text">
            设备时间： 2023/03/30 10:24
          </div>
          <div class="monitor-infor-cont-content-text">
            授权到期时间：2024/03/23
          </div>
          <div class="monitor-infor-cont-content-text">HMI版本号：V9.24</div>
          <div class="monitor-infor-cont-content-text">
            固件版本号：
            <!-- <div class="monitor-infor-cont-content-text">2.3.1</div> -->
          </div>

          <div class="monitor-infor-cont-content-text">板卡版本号：</div>
          <!-- <div class="monitor-infor-cont-content-text">1.4.21</div> -->
          <div class="monitor-infor-cont-content-bottom">
            上海嘉强自动化技术有限公司
            <div class="monitor-infor-cont-content-bottom-text">
              https://www.empower.com
            </div>
          </div>
        </div>
      </div>
      <div class="monitor-infor-btns">
        <div class="monitor-infor-btns-btn1" @click="Refe()">刷新</div>
        <div class="monitor-infor-btns-btn2" @click="LazysChange()">
          激光器状态
        </div>
      </div>
    </div>
  </div>
  <div v-if="ViewShow">
    <referView @click="Refe()" v-if="refresh"> </referView>

    <!-- <lazysStatus v-if="lazys"></lazysStatus> -->
    <errorView @click="LazysChange()" v-if="lazys"></errorView>
  </div>
</template>

<style lang="scss" scoped>
.monitor {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
  margin-left: 20px;
  &-input {
    // margin-left: 10px;
    border-radius: 6px;
    background: #364561;
    box-shadow: 0px 10px 10px 0px #00000033;
    width: 300px;
    height: 590px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    &-title {
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 20px;
      margin-top: 20px;
    }

    &-content {
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
      flex-direction: row;

      &-str {
        width: 32px;
        height: 32px;
        margin-top: 4px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../../assets/icons/icongrap.png');
      }

      &-str1 {
        width: 45px;
      }

      &-mid {
        border-radius: 6px;
        background: #47628f;
        width: 100px;
        height: 40px;
      }

      &-end {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }

  &-output {
    margin-right: 10px;
    border-radius: 6px;
    background: #364561;
    box-shadow: 0px 10px 10px 0px #00000033;
    width: 300px;
    height: 590px;

    &-title {
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 21px;
      margin-top: 18px;
    }

    &-content {
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
      flex-direction: row;

      &-sta {
        background-image: url('../../assets/icons/icongreen.png');
        height: 32px;
        width: 32px;
        margin-right: 10px;
      }

      &-sta2 {
        background-image: url('../../assets/icons/iconred.png');
        height: 32px;
        width: 32px;
        margin-right: 10px;
      }

      &-cont {
        display: flex;
        align-items: center;
        width: 177px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: medium;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }

  &-infor {
    width: 450px;

    display: flex;
    flex-direction: column;

    &-cont {
      height: 520px;
      border-radius: 6px;
      background: #364561;
      box-shadow: 0px 10px 10px 0px #00000033;

      &-title {
        margin-left: 29px;
        margin-top: 14px;
        margin-bottom: 14px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }

      &-content {
        margin-left: 20px;
        // margin-top: 10px;
        display: flex;
        flex-direction: column;
        &-text {
          margin-top: 10px;
          color: #f4f4f4;
          font-family: PingFang SC;
          font-weight: medium;
          font-size: 20px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
        }
        &-bottom {
          margin-top: 50px;
          color: #f4f4f4;
          font-family: PingFang SC;
          font-weight: medium;
          font-size: 20px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          &-text {
            margin-top: 20px;
          }
        }
      }
    }

    &-btns {
      // margin-top: 500px;
      // width: 490px;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;

      &-btn1 {
        width: 240px;
        height: 60px;
        margin-right: 10px;
        border-radius: 6px;
        background: #07a96b;
        box-shadow: 0px 10px 10px 0px #00000033;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-btn2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 60px;
        line-height: 60px;
        border-radius: 6px;
        background: #3d7fff;
        box-shadow: 0px 10px 10px 0px #00000033;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;
      }
    }
  }
}
.iconAlarm {
  background-image: url('../../assets/icons/iconred.png');
  height: 32px;
  width: 32px;
  margin-right: 10px;
}
</style>
