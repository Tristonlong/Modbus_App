<script setup lang="ts">
import { ref, reactive } from 'vue'
import bus from '../../utils/eventBus'
const itemNumber = reactive([
  {
    number: 1,
    bancai: 20,
    houdu: 30,
    gonglv: 40,
    zhankongbi: 40,
    pinglv: 20,
    baifu: 20,
    baidongpinglv: 50,
    songsisudu: 20,
    beizhu: 10,
  },
])
const count = ref(22)

function transfoProps() {
  bus.emit('changNumber', this.itemNumber[0].number)
}

function Edit() {
  alert('修改')
}
</script>

<template>
  <div>
    <div class="table">
      <table class="reference">
        <tr>
          <td class="reference-title">编号</td>
          <td class="reference-title">板材</td>
          <td class="reference-title">厚度mm</td>
          <td class="reference-title">功率W</td>
          <td class="reference-title">占空比%</td>
          <td class="reference-title">频率Hz</td>
          <td class="reference-title">摆幅mm</td>
          <td class="reference-title">摆动频率Hz</td>
          <td class="reference-title">送丝速度</td>
          <td class="reference-title">备注</td>
        </tr>
        <tr class="reference-content-tr" v-for="(item, index) in itemNumber">
          <td>{{ item.number }}</td>
          <td>{{ item.bancai }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-tr">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-tr">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-tr">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr class="reference-content-trs">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </table>
    </div>

    <div class="referencebottom">
      <div class="refitem1">工艺号</div>
      <div class="refitem5" @click="transfoProps">
        {{ itemNumber[0].number }}
      </div>
      <div class="refitem2">调用</div>
      <div class="refitem3">断电保存</div>
      <div class="refitem4">还原</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  height: 460px;
  overflow-y: scroll;
  overflow-x: none;
  margin-left: 20px;
  .reference {
    text-align: center;

    &-title {
      width: 120px;
      height: 50px;
      border-radius: 6px 0px 0px 0px;
      background: #1b2535;
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 22px;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      text-align: center;
    }

    &-content-tr {
      background: #47628f;
      width: 120px;
      height: 50px;
      max-height: 20px;
      overflow-y: auto;
    }

    &-content-trs {
      background: #6c7689;
      width: 120px;
      height: 50px;
    }
  }
}

.referencebottom {
  display: flex;
  flex: row;
  margin-top: 20px;

  .refitem1 {
    // margin-right: 10px;
    margin-right: 15px;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
  }

  .refitem2 {
    width: 220px;
    height: 60px;
    margin-left: 77px;
    border-radius: 6px;
    background: #fe0019;
    box-shadow: 0px 10px 10px 0px #00000033;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
  }

  .refitem3 {
    margin-left: 77px;
    width: 220px;
    height: 60px;
    border-radius: 6px;
    background: #3d7fff;
    box-shadow: 0px 10px 10px 0px #00000033;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
  }

  .refitem4 {
    margin-left: 77px;
    background: #07a96b;
    width: 220px;
    height: 60px;
    border-radius: 6px;

    box-shadow: 0px 10px 10px 0px #00000033;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
  }

  .refitem5 {
    width: 138px;
    height: 60px;
    // margin-left: 20px;
    border-radius: 6px;
    background: #47628f;
    box-shadow: 0px 10px 10px 0px #00000033;
    text-align: center;
    box-shadow: 0px 10px 10px 0px #00000033;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 60px;
    letter-spacing: 0px;
  }
}
</style>
