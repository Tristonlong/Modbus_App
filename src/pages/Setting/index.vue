<script setup>
import { ref, onMounted, watch, reactive, onUnmounted } from 'vue'

import InputWithKeyboard from '../../components/InputWithKeyboard/index.vue'
import axios from 'axios'

// 摆动开关
const onswitch = ref(true)
const swingSwitch = ref(100)
const swingPicture = ref(0)
const swingAmplitude = ref(200)
const swingFrequency = ref(100)
const xaxisEnlarge = ref(100)
const xaxisCenterOffset = ref(100)

const blowairBefore = ref(10)
const onPower = ref(50)
const copperMouthRelaxTime = ref(30)
const fishWeldUnworkTime = ref(40)
const fishWeldWorkTime = ref(60)
const offDelay = ref(20)
const lowerTime = ref(15)
const risingTime = ref(10)
const blowairDelay = ref(5)
const offPower = ref(100)

// 开关
function setOn(v) {
  onswitch.value = v
  console.log('点击')
  swingSwitch.value = !swingSwitch.value
}

function GetNumberTwo(v) {
  return Math.round((v * 1000) / 1000)
}
// x轴+
function Xaxiosadd() {
  this.xaxisCenterOffset += 0.1
}
// x轴-
function Xaxiosslice() {
  this.xaxisCenterOffset -= 0.1
}
// 参数 还原
function ChangeReference() {
  console.log('参数还原')
  alert('确认吗?')
  resetParams()
}
// 键盘展示
const keyboardZHshow = ref(false)
function showZhkeyboard() {
  keyboardZHshow.value = !keyboardZHshow.value
}
// 写入的值
// const writeTem = 100
// 摆动开关
let readingTag = false
watch(onswitch, (n, o) => {
  writeCoils([true])
})
watch(swingPicture, (n, o) => {
  if (readingTag) {
    return
  }
  if (swingPicture.value >= 0) {
    writeMuRegister(11, [swingPicture.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
watch(swingAmplitude, (n, o) => {
  if (readingTag) {
    return
  }
  if (swingAmplitude.value >= 0) {
    writeMuRegister(7, [swingAmplitude.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
watch(swingFrequency, (n, o) => {
  if (readingTag) {
    return
  }

  if (swingAmplitude.value >= 0) {
    writeMuRegister(9, [swingAmplitude.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
watch(xaxisCenterOffset, (n, o) => {
  if (readingTag) {
    return
  }
  writeMuRegister(73, [swingFrequency.value, 0])
})
// x轴放大倍数
watch(xaxisEnlarge, (n, o) => {
  if (readingTag) {
    return
  }
  writeMuRegister(75, [xaxisEnlarge.value, 0])
})
// 监听吹气
watch(blowairBefore, (n, o) => {
  if (readingTag) {
    return
  }

  if (blowairBefore.value >= 0) {
    writeMuRegister(41, [blowairBefore.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 吹气延时
watch(blowairDelay, (n, o) => {
  if (readingTag) {
    return
  }

  if (blowairDelay.value >= 0) {
    writeMuRegister(43, [blowairDelay.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 开光功率
watch(onPower, (n, o) => {
  if (readingTag) {
    return
  }

  if (onPower.value >= 0) {
    writeMuRegister(47, [onPower.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 关光功率
watch(offPower, (n, o) => {
  if (readingTag) {
    return
  }
  if (offPower.value >= 0) {
    writeMuRegister(49, [offPower.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 缓生时间
watch(risingTime, (n, o) => {
  if (readingTag) {
    return
  }

  if (risingTime.value >= 0) {
    writeMuRegister(51, [risingTime.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 缓降时间
watch(lowerTime, (n, o) => {
  if (readingTag) {
    return
  }

  if (lowerTime.value >= 0) {
    writeMuRegister((53)[(lowerTime.value, 0)])
  } else {
    alert('输入的值不能小于0')
  }
})
// 关光延时
watch(offDelay, (n, o) => {
  if (readingTag) {
    return
  }

  if (offDelay.value >= 0) {
    writeMuRegister(45, [offDelay.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 鱼鳞焊接
watch(fishWeldUnworkTime, (n, o) => {
  if (readingTag) {
    return
  }

  if (fishWeldUnworkTime.value >= 0) {
    writeMuRegister(57, [fishWeldUnworkTime.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 鱼鳞持续
watch(fishWeldWorkTime, (n, o) => {
  if (readingTag) {
    return
  }

  if (fishWeldWorkTime.value >= 0) {
    writeMuRegister(59, [fishWeldWorkTime.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
// 铜嘴放松
watch(copperMouthRelaxTime, (n, o) => {
  if (readingTag) {
    return
  }

  if (copperMouthRelaxTime.value >= 0) {
    writeMuRegister(61, [copperMouthRelaxTime.value, 0])
  } else {
    alert('输入的值不能小于0')
  }
})
const timer = ref(null)

onMounted(async () => {
  readingTag = true
  console.log('发送请求')
  // 摆动图形
  const tem4 = await readMutRegister(11, 2)
  swingPicture.value = tem4.data[0]
  // // 摆动幅度
  const tem5 = await readMutRegister(7, 2)
  swingAmplitude.value = tem5.data[0] * 0.1
  // 摆动频率
  const tem6 = await readMutRegister(9, 2)
  swingFrequency.value = tem6.data[0]
  // x轴偏移
  const tem1 = await readMutRegister(12, 2)
  xaxisCenterOffset.value = tem1.data[0] * 0.1
  // x轴放大
  const tem2 = await readMutRegister(12, 2)
  xaxisEnlarge.value = tem2.data[0] * 0.01
  // 吹气提前
  const tem9 = await readMutRegister(41, 2)
  blowairBefore.value = tem9.data[0]
  // 吹气延时
  const tem10 = await readMutRegister(41, 2)
  blowairDelay.value = tem10.data[0]
  // 开光功率
  const tem11 = await readMutRegister(41, 2)
  onPower.value = tem11.data[0]
  // 关光功率
  const tem12 = await readMutRegister(41, 2)
  offPower.value = tem12.data[0]
  // 缓升时间
  const tem13 = await readMutRegister(41, 2)
  risingTime.value = tem13.data[0]
  // 缓降时间
  const tem14 = await readMutRegister(41, 2)
  lowerTime.value = tem14.data[0]
  // 关光延时
  const tem15 = await readMutRegister(41, 2)
  offDelay.value = tem15.data[0]
  // 鱼间隔
  const tem16 = await readMutRegister(41, 2)
  fishWeldUnworkTime.value = tem16.data[0]
  // 鱼持续
  const tem17 = await readMutRegister(41, 2)
  fishWeldWorkTime.value = tem17.data[0]
  // 嘴松
  const tem18 = await readMutRegister(41, 2)
  copperMouthRelaxTime.value = tem18.data[0]
  readingTag = false
})
// 清除定时器
onUnmounted(() => {
  clearInterval(timer.value)
  console.log('消除2')
})

const showInput1 = ref(false)

function clickInput1() {
  showInput1.value = true
}
// 还原的值
const receivedate = reactive([])
// 写入寄存器
let writeRegisterTag = false
async function writeMuRegister(startid, values) {
  if (writeRegisterTag) {
    return
  }
  writeRegisterTag = true

  const response = await axios.post(`/api/registers/${startid}`, {
    value: values,
  })

  writeRegisterTag = false
}
// 写入线圈值,摆动开关
async function writeCoils(values) {
  const response = await axios.post('/api/coils/104', { value: values })
  const statusCode = response.status
  if (statusCode == 200) {
    const response = await axios.post('/api/coils/104', { value: values })
  }
}
// 参数（寄存器）还原发送请求
async function resetParams() {
  // 摆动图形
  const reset = ref(false)
  const requests = [
    { url: '/api/registers/10', value: [1] },
    { url: '/api/registers/7', value: [2] },
    { url: '/api/registers/9', value: [100] },
    { url: '/api/registers/73', value: [0] },
    { url: '/api/registers/75', value: [0] },
    { url: '/api/registers/41', value: [300] },
    { url: '/api/registers/43', value: [200] },
    // 关光延时
    { url: '/api/registers/45', value: [100] },
    { url: '/api/registers/47', value: [300] },
    { url: '/api/registers/49', value: [300] },
    { url: '/api/registers/51', value: [200] },
    { url: '/api/registers/53', value: [200] },
    { url: '/api/registers/57', value: [50] },
    { url: '/api/registers/59', value: [10] },
    { url: '/api/registers/61', value: [0] },
  ]
  for (const request of requests) {
    const response = await axios.post(request.url, { value: request.value })
    console.log(response)
  }
  reset.value = true
  if (reset.value == true) {
    const requests = [
      { url: '/api/registers/10/1' },
      { url: '/api/registers/7/1' },
      { url: '/api/registers/9/1' },
      { url: '/api/registers/73/1' },
      { url: '/api/registers/75/1' },
      { url: '/api/registers/41/1' },
      { url: '/api/registers/43/1' },
      { url: '/api/registers/45/1' },
      { url: '/api/registers/47/1' },
      { url: '/api/registers/49/1' },
      { url: '/api/registers/51/1' },
      { url: '/api/registers/53/1' },
      { url: '/api/registers/57/1' },
      { url: '/api/registers/59/1' },
      { url: '/api/registers/61/1' },
    ]
    for (const request of requests) {
      const response = await axios.get(request.url)
      console.log(response)
    }
  }
  reset.value = false
}
// 读取寄存器的值
async function readMutRegister(registerId, limit) {
  // readingTag = true
  const response1 = await axios.get(`/api/registers/${registerId}/${limit}`)
  if (response1.status == 200) {
    const response2 = await axios.get(`/api/registers/${registerId}/${limit}`)
    return response2
  }
}
</script>
<template>
  <div class="setting">
    <div class="settingleft">
      <div class="settingleft-title">{{ $t('zhenjingSet') }}</div>
      <!-- 按钮 -->
      <div class="settingleft-item">
        <div class="settingleft-item-sta">{{ $t('baidongSwitch') }}</div>
        <div class="settingleft-item-mid">
          <div
            class="settingleft-item-mid-fir"
            @click="setOn(swingSwitch)"
            :class="onswitch ? 'onSwitact' : ''">
            ON
          </div>
          <div
            class="settingleft-item-mid-end"
            @click="setOn(swingSwitch)"
            :class="onswitch ? '' : 'onSwitact2'">
            OFF
          </div>
        </div>
      </div>

      <div class="settingleft-items">
        <div class="settingleft-items-sta">{{ $t('baidongPic') }}</div>
        <!-- 摆动图形 -->
        <input-with-keyboard
          v-model="swingPicture"
          input-type="number"
          @click="showInput1"></input-with-keyboard>

        <div class="settingleft-items-end"></div>
      </div>
      <div class="settingleft-items">
        <div class="settingleft-items-sta">{{ $t('baidongFudu') }}</div>
        <!-- <div> class="settingleft-item-mid" /> -->
        <input-with-keyboard
          v-model="swingAmplitude"
          input-type="number"></input-with-keyboard>

        <div class="settingleft-items-end">mm</div>
      </div>
      <div class="settingleft-items">
        <div class="settingleft-items-sta">{{ $t('baidongPinglv') }}</div>
        <!-- <div> class="settingleft-item-mid" /> -->
        <input-with-keyboard
          v-model="swingFrequency"
          input-type="number"></input-with-keyboard>

        <div class="settingleft-items-end">Hz</div>
      </div>
      <div class="settingleft-bottom">
        <div class="settingleft-bottom-pic">
          <div class="settingleft-bottom-pic-btn1" @click="Xaxiosadd()"></div>
          <div class="settingleft-bottom-pic-btn2" @click="Xaxiosslice()"></div>
        </div>
        <div class="settingleft-bottom-right">
          <div class="settingleft-bottom-right-item">
            <div class="settingleft-bottom-right-item-tex">
              <div class="settingleft-bottom-right-item-tex">
                {{ $t('xaxiosCenter') }}
              </div>
              <div class="settingleft-bottom-right-item-mid">
                <div class="settingleft-bottom-right-item-mid-sel">
                  {{ xaxisCenterOffset.toFixed(1) }}
                </div>
                <div class="settingleft-bottom-right-item-end">mm</div>
              </div>
            </div>
            <div class="settingleft-bottom-item-tex"></div>
          </div>
          <div class="settingleft-bottom-right-item">
            <div class="settingleft-bottom-right-item-tex">
              <div class="settingleft-bottom-right-item-tex">
                {{ $t('xaxiosBigger') }}
              </div>
              <div class="settingleft-bottom-right-item-mid">
                <div class="settingleft-bottom-right-item-mid-sel">
                  {{ xaxisEnlarge }}
                </div>
                <div class="settingleft-bottom-right-item-end"></div>
              </div>
            </div>
            <div class="settingleft-bottom-item-tex"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="settingright">
      <div class="settingleft-title">{{ $t('') }}</div>
      <div class="settingright-top">
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">吹气提前</div>
          <!-- <div class="settingright-top-item-mid"></div> -->
          <input-with-keyboard
            v-model="swingPicture"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">吹气延时</div>
          <!-- <div class="settingright-top-item-mid">
            {{ blowairDelay }}
          </div> -->
          <input-with-keyboard
            v-model="blowairDelay"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">开光功率</div>
          <!-- <div class="settingright-top-item-mid">
            {{ onPower }}
          </div> -->
          <input-with-keyboard
            v-model="onPower"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">w</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">关光功率</div>
          <!-- <div class="settingright-top-item-mid">
            {{ offPower }}
          </div> -->
          <input-with-keyboard
            v-model="offPower"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">W</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">缓升时间</div>
          <!-- <div class="settingright-top-item-mid">
            {{ risingTime }}
          </div> -->
          <input-with-keyboard
            v-model="risingTime"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">缓降时间</div>
          <!-- <div class="settingright-top-item-mid">
            {{ lowerTime }}
          </div> -->
          <input-with-keyboard
            v-model="lowerTime"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>

          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">关光延时</div>
          <!-- <div class="settingright-top-item-mid">
            {{ offDelay }}
          </div> -->
          <input-with-keyboard
            v-model="offDelay"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">ms</div>
        </div>
      </div>
      <div class="settingright-bottom">
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta">鱼鳞焊间隔时间</div>
          <!-- <div class="settingright-bottom-mid">
            {{ fishWeldUnworkTime }}
          </div> -->
          <input-with-keyboard
            v-model="fishWeldUnworkTime"
            input-type="number"
            class="settingright-bottom-mid"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">mm</div>
        </div>
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta2">鱼鳞焊持续时间</div>
          <!-- <div class="settingright-bottom-mid">
            {{ fishWeldWorkTime }}
          </div> -->
          <input-with-keyboard
            v-model="fishWeldWorkTime"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">mm</div>
        </div>
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta">铜嘴放松时间</div>
          <!-- <div class="settingright-top-item-mid">
            {{ copperMouthRelaxTime }}
          </div> -->
          <input-with-keyboard
            v-model="copperMouthRelaxTime"
            input-type="number"
            class="keyInput"
            @click="showInput1"></input-with-keyboard>
          <div class="settingright-top-item-end">mm</div>
        </div>
        <div class="settingright-bottom-btn" @click="ChangeReference()">
          参数还原
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.setting {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  .settingleft {
    width: 423px;
    height: 590px;
    border-radius: 6px;
    background: #364561;
    box-shadow: 0px 10px 10px 0px #00000033;

    &-title {
      margin-top: 13px;
      margin-left: 20px;
      color: #07a96b;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 30px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
    }

    &-item {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      margin-left: 20px;

      &-sta {
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        line-height: 50px;
        margin-right: 10px;
      }

      &-mid {
        width: 234px;
        height: 50px;
        border-radius: 6px;
        background: #47628f;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;

        &-fir {
          width: 117px;
          height: 50px;
          border-radius: 6px;
          line-height: 50px;
          text-align: center;
          // background: #07A96B;
        }

        &-end {
          line-height: 50px;
          margin-left: 43px;
          width: 117px;
          margin-left: 0px;
          // background: #07A96B;
        }
      }

      &-end {
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        line-height: 50px;
        margin-left: 10px;
      }
    }
    &-items {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      margin-left: 20px;
      &-sta {
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        line-height: 50px;
        margin-right: 10px;
      }
      &-mid {
        width: 234px;
        height: 50px;
        border-radius: 6px;
        background: #47628f;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: right;
        align-items: center;
        justify-content: center;
      }
      &-end {
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        line-height: 50px;
        margin-left: 10px;
      }
    }
    &-bottom {
      margin-top: 20px;
      height: 200px;
      display: flex;
      flex-direction: row;

      &-pic {
        width: 210px;
        height: 200px;
        display: flex;
        flex-direction: row;
        background-image: url('../../assets/picture/ButtonX.png');
        &-btn1 {
          width: 50px;
          height: 50px;
          margin-top: 73px;
          margin-left: 15px;
        }
        &-btn2 {
          width: 50px;
          height: 50px;
          margin-top: 73px;
          margin-left: 82px;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        &-item {
          display: flex;
          flex-direction: column;
          margin-top: 5px;

          &-tex {
            color: #ffffff;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 24px;
            line-height: 46px;
            letter-spacing: 0px;
            // text-align: center;
            margin-top: 5px;
            // padding-left: 10px;
          }

          &-mid {
            display: flex;
            flex-direction: row;
            margin-top: 5px;

            &-sel {
              width: 130px;
              height: 50px;
              border-radius: 6px;
              background: #47628f;
              margin-left: 5px;
            }
          }

          &-end {
            margin-left: 5px;
            line-height: 50px;
          }
        }
      }
    }
  }

  .settingright {
    width: 677px;
    height: 590px;
    margin-left: 10px;
    border-radius: 6px;
    background: #364561;
    box-shadow: 0px 10px 10px 0px #00000033;
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &-item {
        margin-top: 20px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 5px;

        &-sta {
          width: 96px;
          margin-right: 10px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          line-height: 50px;
          margin-left: 10px;
        }

        &-mid {
          width: 160px;
          height: 50px;
          border-radius: 6px;
          background: #47628f;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 20px;
          line-height: 46px;
          letter-spacing: 0px;
          text-align: center;
        }

        &-end {
          width: 30px;
          margin-left: 10px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 20px;
          line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          line-height: 50px;
        }
      }
    }

    &-bottom {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      margin-left: 20px;
      flex-wrap: wrap;

      &-mid {
        width: 88px;
        height: 50px;
        border-radius: 6px;
        background: #47628f;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: 46px;
        letter-spacing: 0px;
        text-align: center;
      }

      &-item {
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        // margin-left: 15px;

        &-sta {
          width: 170px;
          line-height: 50px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          // line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          margin-right: 10px;
        }

        &-sta2 {
          width: 170px;
          line-height: 50px;
          color: #ffffff;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 24px;
          // line-height: normal;
          letter-spacing: 0px;
          text-align: left;
          // margin-right: 10px;
          margin-left: 35px;
        }
      }

      &-btn {
        width: 246px;
        height: 50px;
        border-radius: 6px;
        background: #07a96b;
        color: #ffffff;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 30px;
        line-height: 50px;
        margin-left: 25px;
      }
    }
  }
}

.onSwitact {
  background: #07a96b;
  // width: 100px;
  height: 50px;
  border-radius: 6px;
}
.onSwitact2 {
  background: #07a96b;
  // width: 100px;
  height: 50px;
  border-radius: 6px;
}
.v2keyboard {
  position: relative;
  width: 200px;
  height: 100px;
}
</style>
