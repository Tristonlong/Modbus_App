<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import lazysStatus from './lazysStatus.vue'
import referView from './referView.vue'
import errorView from './errorView.vue'
const ViewShow = ref(false)
// 刷新
const refresh = ref(false)
function Refe() {
  refresh.value = !refresh.value
  console.log(refresh.value)
}

// 激光状态
const lazys = ref(false)
function LazysChange() {
  lazys.value = !lazys.value
  console.log(lazys.value)
}
// 故障
const unwork = ref(true)

onMounted(() => {
  unwork.value = true
})

// jg激活
</script>

<template>
  <div class="monitor">
    <div class="monitor-input">
      <div class="monitor-input-title">IO状态</div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">焊枪开关</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">安全地锁</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">振镜IO</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">激光使能</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">气阀</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">送丝</div>
      </div>
      <div class="monitor-input-content">
        <div class="monitor-input-content-str1"></div>
        <input class="monitor-input-content-mid" />
        <div class="monitor-input-content-end">DA</div>
      </div>
    </div>
    <div class="monitor-output">
      <div class="monitor-output-title">状态</div>
      <div class="monitor-output-content">
        <div class="monitor-output-content-sta"></div>
        <div class="monitor-output-content-cont">激光器</div>
      </div>
      <div class="monitor-output-content">
        <div class="monitor-output-content-sta2"></div>
        <div class="monitor-output-content-cont">冷水机</div>
      </div>
      <div class="monitor-output-content">
        <div class="monitor-output-content-sta"></div>
        <div class="monitor-output-content-cont">触摸屏-激光卡通讯</div>
      </div>
      <div class="monitor-output-content">
        <div class="monitor-output-content-sta"></div>
        <div class="monitor-output-content-cont">触摸屏-振镜卡通讯</div>
      </div>
      <div class="monitor-output-content">
        <div class="monitor-output-content-sta"></div>
        <div class="monitor-output-content-cont">气压</div>
      </div>
    </div>
    <div class="monitor-infor">
      <div class="monitor-infor-cont">
        <div class="monitor-infor-cont-title">信息</div>
        <div class="monitor-infor-cont-content">内容</div>
      </div>
      <div class="monitor-infor-btns">
        <div class="monitor-infor-btns-btn1" @click="Refe()">刷新</div>
        <div class="monitor-infor-btns-btn2" @click="LazysChange()">
          激光器状态
        </div>
      </div>
    </div>
  </div>
  <div v-show="ViewShow">
    <referView @click="Refe()" v-if="refresh"> </referView>

    <lazysStatus @click="LazysChange()" v-if="lazys"></lazysStatus>
    <errorView v-if="unwork"></errorView>
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
    width: 490px;

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
</style>
