<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { generReference } from '../../pinia/homeView.js'
// import
import CustomEcharts from '../../components/echarts/CustomEcharts.vue'
import JGshow from './JGshow.vue'

// 激光提示
// const JGshowb = websocketLIstanbul.laserSwitch
const JGshowb = ref(false)
const laserSwitch = ref(false)

// websocket接收到的参数
const websocketLIstanbul = ref({})
// 报警指示灯
const laserAlarm = ref(true)

function JGshowfn() {
  JGshowb.value = !JGshowb.value
  // sendSock(laserSwitch)
}

function ChangePullFocus() {
  console.log('change')
}
function ChangeManualBlowing() {}
function ChangeFishWeld() {}
function ChangeSendSiSwitch() {}
onMounted(() => {})

// 引入store
const store = generReference()

// console.log(store.websocketLIstanbul.fishWeld)
</script>

<template>
  <div class="contentArea">
    <div class="contentArea-left">
      <div class="contentArea-left-top">
        <div class="contentArea-left-top-item1">
          <div class="contentArea-left-top-item1-sta">
            {{ $t('shebeiWendu') }}
          </div>
          <div class="contentArea-left-top-item1-mid">
            {{ store.websocketLIstanbul.deviceTemperature }}
            <!-- {{ msg.buSiDelay }}+123 -->
          </div>
          <div class="contentArea-left-top-item1-end">℃</div>
        </div>
        <div class="contentArea-left-top-item1">
          <div class="contentArea-left-top-item1-sta">
            {{ $t('qiangtouWendu') }}
          </div>

          <div class="contentArea-left-top-item1-mid">
            {{ store.websocketLIstanbul.gunTemperature }}
          </div>
          <div class="contentArea-left-top-item1-end">℃</div>
        </div>
        <div class="contentArea-left-top-item1">
          <div class="contentArea-left-top-item1-sta">
            {{ $t('shishiQiya') }}
          </div>

          <div class="contentArea-left-top-item1-mid">
            {{ store.websocketLIstanbul.timelyGas }}
          </div>
          <div class="contentArea-left-top-item1-end">Bar</div>
        </div>
      </div>
      <div class="contentArea-left-mid">
        <div class="contentArea-left-mid-item1">
          <div class="contentArea-left-mid-item1-text">
            {{ $t('jiguangqi') }}
          </div>
          <div class="contentArea-left-mid-item1-pic"></div>
        </div>
        <div class="contentArea-left-mid-item2">
          <div class="contentArea-left-mid-item2-text">{{ $t('tongxun') }}</div>
          <div class="contentArea-left-mid-item1-pic"></div>
        </div>
        <div class="contentArea-left-mid-item1">
          <div class="contentArea-left-mid-item1-text">
            {{ $t('zhenjing') }}
          </div>
          <div class="contentArea-left-mid-item1-pic2"></div>
        </div>
        <div class="contentArea-left-mid-item2">
          <div class="contentArea-left-mid-item2-text">{{ $t('baohuqi') }}</div>
          <div class="contentArea-left-mid-item1-pic"></div>
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
        <CustomEcharts class="contentArea-mid-top-charts" />
        <div class="contentArea-mid-top-button">
          <div class="contentArea-mid-top-button-Jian"></div>
          <div class="contentArea-mid-top-button-Mid">激光功率</div>
          <div class="contentArea-mid-top-button-Add"></div>
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
          <div><input class="contentArea-mid-bottom-item2-input" /></div>
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
            {{ store.websocketLIstanbul.swingPicture }}
          </div>
          <div class="contentArea-right-top-item-end"></div>
        </div>
        <div class="contentArea-right-top-item">
          <div class="contentArea-right-top-item-sta">
            {{ $t('baidongFudu') }}
          </div>
          <!-- <input class="contentArea-right-top-item-mid" type="text" /> -->
          <div class="contentArea-right-top-item-mid">
            {{ store.websocketLIstanbul.swingAmplitude }}
          </div>
          <div class="contentArea-right-top-item-end">mm</div>
        </div>
        <div class="contentArea-right-top-item">
          <div class="contentArea-right-top-item-sta">
            {{ $t('baidongPinglv') }}
          </div>

          <div class="contentArea-right-top-item-mid">
            {{ store.websocketLIstanbul.swingFrequency }}
          </div>
          <div class="contentArea-right-top-item-end">Hz</div>
        </div>
        <div class="contentArea-right-top-item">
          <div class="contentArea-right-top-item-sta">
            {{ $t('jiguangPinglv') }}
          </div>

          <div class="contentArea-right-top-item-mid">
            {{ store.websocketLIstanbul.laserFrequency }}
          </div>
          <div class="contentArea-right-top-item-end">Hz</div>
        </div>
        <div class="contentArea-right-top-item">
          <div class="contentArea-right-top-item-sta">
            {{ $t('zhankongPre') }}
          </div>

          <div class="contentArea-right-top-item-mid">
            {{ store.websocketLIstanbul.laserPrecent }}
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
</style>
