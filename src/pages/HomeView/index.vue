<script setup>
import { ref, reactive, onMounted, computed, watchEffect, watch } from 'vue'
import { generReference } from '../../pinia/homeView.js'
import v2keyboard from '../../keyboard/v2keyboard.vue'
// import
import CustomEcharts from '../../components/echarts/CustomEcharts.vue'
import JGshow from './JGshow.vue'
import { storeToRefs } from 'pinia'

// import { count } from 'console'

const store = generReference()
const {
  deviceTemperature,
  gunTemperature,
  timelyGas,
  laserPower,
  swingPicture,
  swingAmplitude,
  swingFrequency,
  laserFrequency,
  laserPrecent,
  laserAlarm,
} = storeToRefs(store)

// 激光提示
// const JGshowb = websocketLIstanbul.laserSwitch
const JGshowb = ref(false)
const laserSwitch = ref(false)

// websocket接收到的参数
// const websocketLIstanbul = ref({})
// 报警指示灯
// const laserAlarm = ref(true)
// 激光Echarts传递
const laserPowerAll = ref(0)
console.log(laserPower.value)
watchEffect(() => {
  laserPower
  // console.log(laserPower.value)
})

watch(deviceTemperature, (newV, oldV) => {
  console.log(newV, oldV)
  if (newV > 100) {
    alert('error')
  }
})
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
  console.log('手动吹气取反')
  this.manualBlowing = !this.manualBlowing
}
function ChangeFishWeld() {
  console.log('鱼鳞取反')
  this.fishWeld = !this.fishWeld
}
function ChangeSendSiSwitch() {
  console.log('送丝取反')
  this.sendSiSwitch = !this.sendSiSwitch
}
// 激光功率减
function JianLaserPower() {
  this.laserPower -= 100
}
// 激光功率加
function AddLaserPower() {
  this.laserPower += 100
}

const GyNum = ref(0)
// function GongyiNum() {
//   bus.on('changNumber', count => {
//     this.GyNum = count
//   })
// }
// console.log(count)
console.log(GyNum.value + '23')

//  键盘显示
const keyboardZHshow = ref(true)
function showZhkeyboard() {
  keyboardZHshow.value = !keyboardZHshow.value
}
onMounted(() => {})
</script>

<template>
  <div class="main">
    <div class="contentArea">
      <div class="contentArea-left">
        <div class="contentArea-left-top">
          <div class="contentArea-left-top-item1">
            <div
              class="contentArea-left-top-item1-sta"
              @click="showZhkeyboard()">
              {{ $t('shebeiWendu') }}
            </div>
            <input
              class="contentArea-left-top-item1-mid"
              type="number"
              v-model="deviceTemperature" />

            <div class="contentArea-left-top-item1-end">℃</div>
          </div>
          <div class="contentArea-left-top-item1">
            <div class="contentArea-left-top-item1-sta">
              {{ $t('qiangtouWendu') }}
            </div>

            <input
              class="contentArea-left-top-item1-mid"
              type="number"
              v-model="gunTemperature" />

            <div class="contentArea-left-top-item1-end">℃</div>
          </div>
          <div class="contentArea-left-top-item1">
            <div class="contentArea-left-top-item1-sta">
              {{ $t('shishiQiya') }}
            </div>
            <input
              class="contentArea-left-top-item1-mid"
              type="number"
              v-model="timelyGas" />

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
              :class="laserAlarm ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item2">
            <div class="contentArea-left-mid-item2-text">
              {{ $t('tongxun') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="laserAlarm ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item1">
            <div class="contentArea-left-mid-item1-text">
              {{ $t('zhenjing') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="laserAlarm ? '' : 'iconFail'"></div>
          </div>
          <div class="contentArea-left-mid-item2">
            <div class="contentArea-left-mid-item2-text">
              {{ $t('baohuqi') }}
            </div>
            <div
              class="contentArea-left-mid-item1-pic"
              :class="laserAlarm ? '' : 'iconFail'"></div>
          </div>
        </div>
        <div class="contentArea-left-bottom">
          <div class="contentArea-left-bottom-item1">
            {{ $t('anquanLock') }}
            <div class="contentArea-left-bottom-item1-title"></div>
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
              {{ GyNum }}
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
            <input
              class="contentArea-right-top-item-mid"
              type="number"
              v-model="swingPicture" />

            <div class="contentArea-right-top-item-end"></div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('baidongFudu') }}
            </div>
            <!-- <input class="contentArea-right-top-item-mid" type="text" /> -->
            <input
              class="contentArea-right-top-item-mid"
              v-model="swingAmplitude"
              type="number" />

            <div class="contentArea-right-top-item-end">mm</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('baidongPinglv') }}
            </div>

            <input
              class="contentArea-right-top-item-mid"
              type="number"
              v-model="swingFrequency" />

            <div class="contentArea-right-top-item-end">Hz</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('jiguangPinglv') }}
            </div>
            <input
              class="contentArea-right-top-item-mid"
              type="number"
              v-model="laserFrequency" />

            <div class="contentArea-right-top-item-end">Hz</div>
          </div>
          <div class="contentArea-right-top-item">
            <div class="contentArea-right-top-item-sta">
              {{ $t('zhankongPre') }}
            </div>

            <input
              class="contentArea-right-top-item-mid"
              type="number"
              v-model="laserPrecent" />

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
    <v2keyboard v-if="keyboardZHshow" class="v2keyboard"></v2keyboard>
    <!-- <div class="demo">2323</div> -->
  </div>
</template>

<style lang="scss" scoped>
// .main {
//   position: absolute;
// }
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
  width: 20px;
  height: 100px;
}
</style>
