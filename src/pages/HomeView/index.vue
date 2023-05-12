<script setup>
import { ref, onMounted, watch, onUnmounted, inject } from 'vue'

import v2keyboard from '../../keyboard/v2keyboard.vue'
import axios from 'axios'
import CustomEcharts from '../../components/echarts/CustomEcharts.vue'
import JGshow from './JGshow.vue'
const deviceTemperature = ref(10)
const gunTemperature = ref(0)
const timelyGas = ref(100)

const swingPicture = ref(100)
const swingAmplitude = ref(100)
const swingFrequency = ref(100)
const laserFrequency = ref(100)
const laserPrecent = ref(100)
const laserPower = ref(100)
const laserSwitch = ref(true)
const commounicate = ref(true)
const zhenjin = ref(true)
const protectGas = ref(true)
const laserDev = ref(true)
const safeLock = ref(true)
const lajiaodian = ref(true)
const shoudongchuiqi = ref(true)
const yulingdianhan = ref(true)
const songsikaiguan = ref(true)
const zhankongbi = ref(100)
// 是否加载完毕
const loading = ref(false)
// 点击调用摆动幅度
const JGshowb = ref(false)

const shareddata = inject('shareddata')
console.log(shareddata.value)
watch(gunTemperature, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
watch(timelyGas, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// 摆动图形
watch(swingPicture, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// 摆动幅度
watch(swingAmplitude, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// 摆动频率
watch(swingFrequency, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// 激光频率
watch(laserFrequency, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// 占空比
watch(laserPrecent, (newV, oldV) => {
  if (newV > 1000) {
    alert('error')
  }
})
// const wendu = computed(() => deviceTemperature.value.data[0])
const timer = ref(null)
let readingTag = false
onMounted(async () => {
  loading.value = true
  readingTag = true
  await readCoilds(1, 120)
  const tem1 = await readMutRegister(21, 2)
  console.log(tem1)
  deviceTemperature.value = tem1.data[0]
  console.log(23)
  // // 枪头温度
  const tem2 = await readMutRegister(23, 3)
  console.log(tem2)
  gunTemperature.value = tem2.data[0]
  // // 实时气压
  const tem3 = await readMutRegister(25, 2)
  timelyGas.value = tem3.data[0]
  console.log(24)
  // 激光功率
  const lazytem = await readMutRegister(1, 2)
  laserPower.value = lazytem.data[0]
  // 摆动图形
  const tem4 = await readMutRegister(11, 2)
  swingPicture.value = tem4.data[0]
  // 摆动幅度
  const tem5 = await readMutRegister(7, 2)
  swingAmplitude.value = tem5.data[0]
  // 摆动频率
  const tem6 = await readMutRegister(9, 2)
  swingFrequency.value = tem6.data[0]
  // 激光频率
  const tem7 = await readMutRegister(3, 2)
  laserFrequency.value = tem7.data[0]
  // 占空比
  const tem8 = await readMutRegister(5, 2)
  zhankongbi.value = tem8.data[0]
  readingTag = false
  timer.value = setInterval(async () => {
    readingTag = true
    try {
      await readCoilds(1, 120)
      //  设备温度
      console.log('发送')
      // deviceTemperature.value = await readMutRegister(21, 2)
      // const wendu = deviceTemperature.value.data[0]

      const tem1 = await readMutRegister(21, 2)
      deviceTemperature.value = tem1.data[0]
      // 枪头温度
      const tem2 = await readMutRegister(23, 3)
      gunTemperature.value = tem2.data[0]
      // 实时气压
      const tem3 = await readMutRegister(25, 2)
      timelyGas.value = tem3.data[0]
      // 激光功率
      const lazytem = await readMutRegister(1, 2)
      laserPower.value = lazytem.data[0]
      // 摆动图形
      const tem4 = await readMutRegister(11, 2)
      swingPicture.value = tem4.data[0]
      // 摆动幅度
      const tem5 = await readMutRegister(7, 2)
      swingAmplitude.value = tem5.data[0]
      // 摆动频率
      const tem6 = await readMutRegister(9, 2)
      swingFrequency.value = tem6.data[0]
      // 激光频率
      const tem7 = await readMutRegister(3, 2)
      laserFrequency.value = tem7.data[0]
      // 占空比
      const tem8 = await readMutRegister(5, 2)
      zhankongbi.value = tem8.data[0]
      readingTag = false
    } catch (error) {
      console.log(error)
    }
  }, 10000)
  // console.log($parent.SetlectId)
  loading.value = true
  readingTag = false
})
onUnmounted(() => {
  clearInterval(timer.value)
  console.log('清除了')
})

// 读取多个寄存器
async function readMutRegister(registerId, limit) {
  readingTag = true
  const response1 = await axios.get(`/api/registers/${registerId}/${limit}`)
  if (response1.status == 200) {
    const response2 = await axios.get(`/api/registers/${registerId}/${limit}`)
    return response2
  }
  readingTag = false
}
// 读取多个线圈的值
async function readCoilds(coilsId, limit) {
  readingTag = true
  const response = await axios.get(`/api/coils/multiple/${coilsId}/${limit}`)
  if (response.status == 200) {
    // 激光器
    laserDev.value = response.data[14]
    // 通讯
    commounicate.value = response.data[16]
    // 振镜
    zhenjin.value = response.data[17]
    // 保护气
    protectGas.value = response.data[18]

    // 安全地锁
    safeLock.value = response.data[9]
    // 激光开关
    laserSwitch.value = response.data[0]
    // 拉焦点
    lajiaodian.value = response.data[1]
    // 手动吹气
    shoudongchuiqi.value = response.data[2]
    // 鱼鳞电焊
    yulingdianhan.value = response.data[3]
    // 送丝开关
    songsikaiguan.value = response.data[4]
    console.log(lajiaodian.value)
    console.log(shoudongchuiqi.value)
    console.log(yulingdianhan.value)
    console.log(songsikaiguan.value)
  }
  const response2 = await axios.get(`/api/coils/multiple/${coilsId}/${limit}`)
  readingTag = false
}
// 写入寄存器的值
let writeTag = false
async function writeRegister(values) {
  if (writeTag) {
    return
  }
  writeTag = true
  const response = await axios.post(`/api/registers/1`, {
    value: values,
  })
  const statusCode = response.status
  console.log(statusCode)
  writeTag = false
}
function JGshowfn() {
  JGshowb.value = !JGshowb.value
  this.laserSwitch = !this.laserSwitch
  console.log(laserSwitch)
}
function ChangePullFocus() {
  console.log('拉焦点取反')

  this.pullFocus = !this.pullFocus
}
function ChangeManualBlowing() {
  // console.log('手动吹气取反')
  this.manualBlowing = !this.manualBlowing
}
function ChangeFishWeld() {
  // console.log('鱼鳞取反')
  this.fishWeld = !this.fishWeld
}
function ChangeSendSiSwitch() {
  // console.log('送丝取反')
  this.sendSiSwitch = !this.sendSiSwitch
}
// 激光功率减
function JianLaserPower() {
  console.log(readingTag)
  if (readingTag) {
    console.log(readingTag)
    console.log('正在读取不能发送')
    return
  }
  console.log(readingTag)
  this.laserPower -= 100
  writeRegister([100, 0])
}
// 激光功率加
function AddLaserPower() {
  if (readingTag) {
    console.log('正在读取不能发送')
    return
  }
  this.laserPower += 100

  writeRegister([laserPower.value, 0])
}
//  键盘显示
const keyboardZHshow = ref(false)
const input = ref('')
function onChange(input) {
  // let input = ref('')
  this.input = input
}
function onKeyPress(button) {}
</script>

<template>
  <div class="main">
    <div class="contentArea">
      <div class="contentArea-left">
        <div class="contentArea-left-top">
          <div class="contentArea-left-top-item1">
            <div class="contentArea-left-top-item1-sta">
              {{ $t('shebeiWendu') }}
            </div>
            <div class="contentArea-left-top-item1-mid">
              {{ loading ? deviceTemperature : '' }}
            </div>
            <div class="contentArea-left-top-item1-end">℃</div>
          </div>
          <div class="contentArea-left-top-item1">
            <div class="contentArea-left-top-item1-sta">
              {{ $t('qiangtouWendu') }}
            </div>
            <div class="contentArea-left-top-item1-mid">
              {{ loading ? gunTemperature : '' }}
            </div>

            <div class="contentArea-left-top-item1-end">℃</div>
          </div>
          <div class="contentArea-left-top-item1">
            <div class="contentArea-left-top-item1-sta">
              {{ $t('shishiQiya') }}
            </div>
            <div class="contentArea-left-top-item1-mid">
              {{ loading ? timelyGas : '' }}
            </div>

            <div class="contentArea-left-top-item1-end">L/min</div>
          </div>
        </div>
        <div class="contentArea-left-mid">
          <div class="contentArea-left-mid-item1">
            <div class="contentArea-left-mid-item1-text">
              {{ $t('jiguangqi') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="laserDev ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item2">
            <div class="contentArea-left-mid-item2-text">
              {{ $t('tongxun') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="commounicate ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item1">
            <div class="contentArea-left-mid-item1-text">
              {{ $t('zhenjing') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="zhenjin ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item2">
            <div class="contentArea-left-mid-item2-text">
              {{ $t('baohuqi') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="protectGas ? '' : 'iconFail'"></div>
          </div>
        </div>
        <div class="contentArea-left-bottom">
          <div class="contentArea-left-bottom-item1">
            {{ $t('anquanLock') }}
            <div class="contentArea-left-bottom-item1-title">
              {{ safeLock.value }}
            </div>
          </div>
        </div>
      </div>
      <div class="contentArea-mid">
        <div class="contentArea-mid-top">
          <CustomEcharts
            class="contentArea-mid-top-charts"
            :laserPower="laserPower" />
          <div class="contentArea-mid-top-button">
            <div
              class="contentArea-mid-top-button-Jian"
              @click="JianLaserPower()"></div>
            <div class="contentArea-mid-top-button-Mid">激光功率</div>
            <div
              class="contentArea-mid-top-button-Add"
              @click="AddLaserPower()"></div>
          </div>
          <div class="contentArea-mid-top-item">
            <!-- <div class="contentArea-mid-top-item-cart">
                                                                                                                                                                                                                                                                                                                                    <button class="contentArea-mid-top-item-cart-btnl">-</button>
                                                                                                                                                                                                                                                                                                                                    <div class="contentArea-mid-top-item-cart-text">激光功率</div>
                                                                                                                                                                                                                                                                                                                                    <button class="contentArea-mid-top-item-cart-btnr">+</button>
                                                                                                                                                                                                                                                                                                                                </div> -->
          </div>
        </div>
        <div class="contentArea-mid-bottom">
          <div class="contentArea-mid-bottom-item1">
            <div>{{ $t('jiguangSwit') }}</div>
            <div
              class="contentArea-mid-bottom-item1-pic"
              :class="JGshowb ? 'acSwitch' : ''"
              @click="JGshowfn()"></div>
          </div>
          <div class="contentArea-mid-bottom-item2">
            <div>{{ $t('gongyiNum') }}</div>
            <div>
              <!-- <input class="contentArea-mid-bottom-item2-input" /> -->
              {{ sharedRef }}
            </div>
          </div>
        </div>
      </div>
      <div class="contentArea-right">
        <div class="contentArea-right-top">
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('baidongPic') }}
            </div>
            <div class="contentArea-right-top-item-mid">
              {{ loading ? swingPicture : '' }}
            </div>

            <div class="contentArea-right-top-item-end"></div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('baidongFudu') }}
            </div>
            <!-- <input class="contentArea-right-top-item-mid" type="text" /> -->
            <!-- <input
              class="contentArea-right-top-item-mid"
              v-model="swingAmplitude"
              @click="showZhkeyboard()"
              type="number" /> -->
            <div class="contentArea-right-top-item-mid">
              {{ loading ? swingAmplitude : '' }}
            </div>
            <div class="contentArea-right-top-item-end">mm</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('baidongPinglv') }}
            </div>
            <div class="contentArea-right-top-item-mid">
              {{ loading ? swingFrequency : '' }}
            </div>
            <div class="contentArea-right-top-item-end">Hz</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('jiguangPinglv') }}
            </div>

            <div class="contentArea-right-top-item-mid">
              {{ loading ? laserFrequency : '' }}
            </div>
            <div class="contentArea-right-top-item-end">Hz</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('zhankongPre') }}
            </div>

            <div class="contentArea-right-top-item-mid">
              {{ loading ? zhankongbi : '' }}
            </div>
            <div class="contentArea-right-top-item-end">%</div>
          </div>
        </div>
        <div class="contentArea-right-bottom">
          <div class="contentArea-right-bottom-item">
            <div class="contentArea-right-bottom-item-text">
              {{ $t('lajiaodian') }}
            </div>
            <div
              class="contentArea-right-bottom-item-pic1"
              @click="ChangePullFocus()"></div>
          </div>
          <div class="contentArea-right-bottom-item2">
            <div
              class="contentArea-right-bottom-item-text"
              @click="ChangeManualBlowing()">
              {{ $t('shoudongchuiqi') }}
            </div>
            <div class="contentArea-right-bottom-item2-pic2"></div>
          </div>
          <div class="contentArea-right-bottom-item">
            <div
              class="contentArea-right-bottom-item-text"
              @click="ChangeFishWeld()">
              {{ $t('yulingdianhan') }}
            </div>
            <div class="contentArea-right-bottom-item-pic3"></div>
          </div>
          <div class="contentArea-right-bottom-item2">
            <div
              class="contentArea-right-bottom-item-text"
              @click="ChangeSendSiSwitch()">
              {{ $t('songsikaiguan') }}
            </div>
            <div class="contentArea-right-bottom-item2-pic4"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="JGshowb" @click="JGshowfn()" :class="JGshowb ? 'active' : ''">
      <JGshow></JGshow>
    </div>

    <!-- <div class="demo">2323</div> -->
  </div>
  <v2keyboard
    v-if="keyboardZHshow"
    @onChange="onChange"
    @onKeyPress="onKeyPress"
    :input="input"
    class="v2keyboard"></v2keyboard>
</template>

<style lang="scss" scoped>
.contentArea {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;

  &-left {
    width: 320px;
    margin-left: 20px;

    &-top {
      border-radius: 6px;
      background: #364561;
      box-shadow: 0px 10px 10px 0px #00000033;
      height: 230px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &-item1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;

        &-sta {
          width: 96px;
          height: 34px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: center;
        }

        &-mid {
          width: 130px;
          height: 50px;
          margin-left: 10px;
          border-radius: 6px;
          background: #47628f;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 20px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: center;
          // margin-right: 20px;
          line-height: 48px;
        }

        &-end {
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

    &-mid {
      height: 230px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &-item1 {
        width: 155px;
        height: 110px;
        border-radius: 6px;
        background: #364561;
        box-shadow: 0px 10px 10px 0px #00000033;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 10px;
        margin-right: 10px;

        &-text {
          margin-top: 14px;
        }

        &-pic {
          margin-top: 10px;
          margin-left: 62px;
          width: 32px;
          height: 32px;
          background-image: url('../../assets/icons/greenicon.png');
        }

        &-pic2 {
          margin-top: 10px;
          margin-left: 62px;
          width: 32px;
          height: 32px;
          background-image: url('../../assets/icons/redicon.png');
        }
      }

      &-item2 {
        width: 155px;
        height: 110px;
        border-radius: 6px;
        background: #364561;
        box-shadow: 0px 10px 10px 0px #00000033;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 10px;

        // margin-right: 10px;

        &-text {
          margin-top: 14px;
        }

        &-pic {
          margin-top: 10px;
          margin-left: 62px;
          width: 32px;
          height: 32px;
          background-image: url('../../assets/icons/greenicon.png');
        }

        &-pic2 {
          margin-top: 10px;
          margin-left: 62px;
          width: 32px;
          height: 32px;
          background-image: url('../../assets/icons/redicon.png');
        }
      }
    }

    &-bottom {
      margin-top: 20px;

      &-item1 {
        width: 320px;
        height: 110px;
        border-radius: 6px;
        background: #364561;
        box-shadow: 0px 10px 10px 0px #00000033;
        line-height: 110px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: 110px;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 10px;
      }
    }
  }

  &-mid {
    width: 450px;
    margin-left: 10px;
    border-radius: 6px;

    &-top {
      border-radius: 6px;

      height: 470px;
      &-charts {
        transform: scale(1);
      }
      &-button {
        width: 450px;
        height: 120px;
        background: #364561;
        display: flex;
        flex-direction: row;
        // line-height: 120px;
        justify-content: center;
        align-items: center;
        &-Jian {
          height: 30px;
          width: 30px;
          background-color: white;
          margin-right: 20px;
          background-image: url('../../assets/icons/Jian.png');
        }
        &-Mid {
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 16px;
          letter-spacing: 0px;
          text-align: left;
        }
        &-Add {
          height: 30px;
          width: 30px;
          background-color: #07a96b;
          margin-left: 20px;
          background-image: url('../../assets/icons/Add.png');
        }
      }

      &-item {
        display: flex;
        flex-direction: row;
        background-color: RGB(54, 69, 97);

        &-cart {
          margin: auto;
          display: flex;
          flex-direction: row;

          &-text {
            color: #ffffff;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
          }

          &-btnl {
            width: 30px;
            color: #ffffff;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
            margin-right: 20px;
          }

          &-btnr {
            background: #07a96b;
            width: 30px;
            margin-left: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
          }
        }
      }

      &-item2 {
        display: flex;
        flex-direction: row;
        background-color: RGB(54, 69, 97);

        &-cart {
          margin: auto;
          display: flex;
          flex-direction: row;

          &-text {
            color: #ffffff;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
          }

          &-btnl {
            width: 30px;
            color: #ffffff;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
            margin-right: 20px;
          }

          &-btnr {
            background: #07a96b;
            width: 30px;
            margin-left: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
          }
        }
      }
    }

    &-bottom {
      display: flex;
      flex-direction: row;

      &-item1 {
        border-radius: 6px;
        width: 220px;
        height: 110px;
        background-color: RGB(54, 69, 97);
        margin-top: 10px;
        margin-right: 10px;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;

        // 未激活图片
        &-pic {
          width: 120px;
          height: 40px;
          margin-left: 54px;
          margin-top: 10px;
          background-image: url('../../assets/icons/off\ \(1\).png');
        }
      }

      &-item2 {
        border-radius: 6px;
        width: 220px;
        height: 110px;
        background-color: RGB(54, 69, 97);
        margin-top: 10px;

        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;

        &-input {
          width: 120px;
          height: 40px;
          border-radius: 6px;
          margin-top: 10px;
          background: #47628f;
        }
      }
    }
  }

  &-right {
    width: 320px;
    margin-left: 10px;

    &-top {
      width: 320px;
      height: 350px;
      border-radius: 6px;
      background: #364561;
      box-shadow: 0px 10px 10px 0px #00000033;

      &-item {
        display: flex;
        flex-direction: row;
        padding-top: 20px;
        margin-left: 20px;
        height: 66px;

        &-sta {
          width: 96px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: right;
          margin-right: 10px;
          line-height: 46px;
        }

        &-mid {
          width: 130px;
          border-radius: 6px;
          background: #47628f;
          height: 46px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 20px;
          line-height: 46px;
          letter-spacing: 0px;
          text-align: center;
        }

        &-end {
          margin-left: 8px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 20px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          line-height: 46px;
        }
      }
    }

    &-bottom {
      height: 230px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &-item {
        height: 110px;
        width: 155px;
        background-color: RGB(54, 69, 97);
        margin-top: 10px;
        margin-right: 10px;

        &-text {
          // line-height: 110px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: center;
          margin-top: 10px;
        }

        &-pic1 {
          width: 100px;
          height: 40px;
          margin-left: 28px;
          margin-top: 10px;
          background-image: url('../../assets/picture/ljd.png');
        }

        &-pic3 {
          width: 100px;
          height: 40px;
          margin-left: 28px;
          margin-top: 10px;
          background-image: url('../../assets/picture/yldh.png');
        }
      }

      &-item2 {
        height: 110px;
        width: 155px;
        background-color: RGB(54, 69, 97);
        margin-top: 10px;

        &-text {
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
        }

        &-pic2 {
          width: 100px;
          height: 40px;
          margin-left: 28px;
          margin-top: 10px;
          background-image: url('../../assets/picture/sdcq.png');
        }

        &-pic4 {
          width: 100px;
          height: 40px;
          margin-left: 28px;
          margin-top: 10px;
          background-image: url('../../assets/picture/sskg.png');
        }
      }
    }
  }
}

// 激活图片
.acSwitch {
  width: 120px;
  height: 40px;
  margin-left: 54px;
  margin-top: 10px;
  background-image: url('../../assets/icons/switchOn.png');
}
// 红色图标
.iconFail {
  margin-top: 10px;
  margin-left: 62px;
  width: 32px;
  height: 32px;
  background-image: url('../../assets/icons/redicon.png');
}
.v2keyboard {
  position: relative;
  width: 200px;
  height: 100px;
}
</style>
