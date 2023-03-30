<script setup>
import { ref, onMounted } from 'vue'
import { generReference } from '../../pinia/homeView.js'
const onswitch = ref(true)
// const props = defineProps({})
// 开关
function setOn(v) {
  onswitch.value = v
  console.log('点击')
}

// x轴+
function Xaxiosadd() {
  console.log('---')
}
// x轴-
function Xaxiosslice() {
  console.log('++++')
}

// 参数 还原
function ChangeReference() {
  console.log('参数还原')
}

onMounted(() => {})

const store = generReference()
</script>

<template>
  <div class="setting">
    <div class="settingleft">
      <div class="settingleft-title">{{ $t('zhenjingSet') }}</div>
      <div class="settingleft-item">
        <div class="settingleft-item-sta">{{ $t('baidongSwitch') }}</div>
        <div class="settingleft-item-mid">
          <div
            class="settingleft-item-mid-fir"
            @click="setOn(false)"
            :class="onswitch ? '' : 'onSwitact'">
            ON
          </div>
          <div
            class="settingleft-item-mid-end"
            @click="setOn(true)"
            :class="onswitch ? 'onSwitact' : ''">
            OFF
          </div>
        </div>
        <div class="settingleft-item-end"></div>
      </div>
      <div class="settingleft-item">
        <div class="settingleft-item-sta">{{ $t('baidongPic') }}</div>
        <!-- <div> class="settingleft-item-mid" /> -->
        <div class="settingleft-item-mid">
          {{ store.websocketLIstanbul.swingPicture }}
        </div>
        <div class="settingleft-item-end"></div>
      </div>
      <div class="settingleft-item">
        <div class="settingleft-item-sta">{{ $t('baidongFudu') }}</div>
        <!-- <div> class="settingleft-item-mid" /> -->
        <div class="settingleft-item-mid">
          {{ store.websocketLIstanbul.swingAmplitude }}
        </div>
        <div class="settingleft-item-end">mm</div>
      </div>
      <div class="settingleft-item">
        <div class="settingleft-item-sta">{{ $t('baidongPinglv') }}</div>
        <!-- <div> class="settingleft-item-mid" /> -->
        <div class="settingleft-item-mid">
          {{ store.websocketLIstanbul.swingFrequency }}
        </div>
        <div class="settingleft-item-end">Hz</div>
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
                  {{ store.websocketLIstanbul.yaxisCenterOffset }}
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
                  {{ store.websocketLIstanbul.xaxisEnlarge }}
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
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.blowairBefore }}
          </div>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">吹气延时</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.blowairDelay }}
          </div>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">开光功率</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.onPower }}
          </div>
          <div class="settingright-top-item-end">w</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">关光功率</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.offPower }}
          </div>
          <div class="settingright-top-item-end">W</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">缓升时间</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.risingTime }}
          </div>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">缓降时间</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.lowerTime }}
          </div>
          <div class="settingright-top-item-end">ms</div>
        </div>
        <div class="settingright-top-item">
          <div class="settingright-top-item-sta">关光延时</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.offDelay }}
          </div>
          <div class="settingright-top-item-end">ms</div>
        </div>
      </div>
      <div class="settingright-bottom">
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta">鱼鳞焊间隔时间</div>
          <div class="settingright-bottom-mid">
            {{ store.websocketLIstanbul.fishWeldUnworkTime }}
          </div>
          <div class="settingright-top-item-end">mm</div>
        </div>
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta2">鱼鳞焊持续时间</div>
          <div class="settingright-bottom-mid">
            {{ store.websocketLIstanbul.fishWeldWorkTime }}
          </div>
          <div class="settingright-top-item-end">mm</div>
        </div>
        <div class="settingright-bottom-item">
          <div class="settingright-bottom-item-sta">铜嘴放松时间</div>
          <div class="settingright-top-item-mid">
            {{ store.websocketLIstanbul.copperMouthRelaxTime }}
          </div>
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
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
            margin-top: 5px;
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
</style>
