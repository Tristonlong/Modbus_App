<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import axios from 'axios'

// 设置参数

const setGonyi = ref(1)
const shareddata = inject('shareddata')
// console.log(shareddata.value)
console.log(23)

const initial2 = [
  {
    number: 1,
    bancai: 20,
    houdu: 30,
    laserPower: 678,
    zhankongbi: 1231,
    pinglv: 533,
    baifu: 251,
    baidongpinglv: 524,
    songsisudu: 252,
    beizhu: '暂无',
  },
  {
    number: 2,
    bancai: 22,
    houdu: 30,
    laserPower: 25000,
    zhankongbi: 420,
    pinglv: 270,
    baifu: 240,
    baidongpinglv: 150,
    songsisudu: 220,
    beizhu: 130,
  },
  {
    number: 3,
    bancai: 22,
    houdu: 30,
    laserPower: 20200,
    zhankongbi: 420,
    pinglv: 21230,
    baifu: 2410,
    baidongpinglv: 250,
    songsisudu: 120,
    beizhu: 210,
  },
  {
    number: 4,
    bancai: 22,
    houdu: 320,
    laserPower: 22000,
    zhankongbi: 450,
    pinglv: 20,
    baifu: 203,
    baidongpinglv: 530,
    songsisudu: 120,
    beizhu: 130,
  },
  {
    number: 5,
    bancai: 22,
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
    number: 6,
    bancai: 22,
    houdu: 130,
    laserPower: 2000,
    zhankongbi: 450,
    pinglv: 20,
    baifu: 220,
    baidongpinglv: 530,
    songsisudu: 220,
    beizhu: 10,
  },
  {
    number: 7,
    bancai: 222,
    houdu: 340,
    laserPower: 2200,
    zhankongbi: 140,
    pinglv: 820,
    baifu: 250,
    baidongpinglv: 560,
    songsisudu: 320,
    beizhu: 120,
  },
]

function Edit() {
  alert('修改')
}
function elecSave() {
  alert('确认吗？')
}
function returnState() {
  RestoreReference()
  console.log('还原')
}

// 点击编号
function clickNumber(num) {
  setGonyi.value = num
  console.log(setGonyi.value)
}

let isApply = false
// 调用请求 优化版
async function applyReference() {
  if (isApply) {
    return
  }
  isApply = true
  const referenceParams = [
    { index: 1, value: initial2[0], commands: [1, 5, 3, 7, 9, 95] },
    { index: 2, value: initial2[1], commands: [1, 5, 3, 7, 9, 95] },
    { index: 3, value: initial2[2], commands: [1, 5, 3, 7, 9, 95] },
    { index: 4, value: initial2[3], commands: [1, 5, 3, 7, 9, 95] },
    { index: 5, value: initial2[4], commands: [1, 5, 3, 7, 9, 95] },
    { index: 6, value: initial2[5], commands: [1, 5, 3, 7, 9, 95] },
    { index: 7, value: initial2[6], commands: [1, 5, 3, 7, 9, 95] },
  ]
  const selectedReference = referenceParams.find(
    param => param.index === setGonyi.value,
  )
  if (selectedReference) {
    for (const command of selectedReference.commands) {
      await EditReference(command, [
        selectedReference.value[getCommandParamName(command)],
      ])
    }
  } else {
    console.log('不对')
  }
  isApply = false
}

function getCommandParamName(command) {
  switch (command) {
    case 1:
      return 'laserPower'
    case 3:
      return 'pinglv'
    case 5:
      return 'zhankongbi'
    case 7:
      return 'baifu'
    case 9:
      return 'baidongpinglv'
    case 95:
      return 'songsisudu'
    default:
      return ''
  }
}

// async function applyReference() {
//   switch (setGonyi.value) {
//     case 1:
//       await EditReference(1, [initial2[0].laserPower])
//       await EditReference(5, [initial2[0].zhankongbi])
//       await EditReference(3, [initial2[0].pinglv])
//       await EditReference(7, [initial2[0].baifu])
//       await EditReference(9, [initial2[0].baidongpinglv])
//       await EditReference(95, [initial2[0].songsisudu])
//       break
//     case 2:
//       await EditReference(1, [initial2[1].laserPower])
//       await EditReference(5, [initial2[1].zhankongbi])
//       await EditReference(3, [initial2[1].pinglv])
//       await EditReference(7, [initial2[1].baifu])
//       await EditReference(9, [initial2[1].baidongpinglv])
//       await EditReference(95, [initial2[1].songsisudu])
//       break
//     case 3:
//       await EditReference(1, [initial2[2].laserPower])
//       await EditReference(5, [initial2[2].zhankongbi])
//       await EditReference(3, [initial2[2].pinglv])
//       await EditReference(7, [initial2[2].baifu])
//       await EditReference(9, [initial2[2].baidongpinglv])
//       await EditReference(95, [initial2[2].songsisudu])
//       break
//     case 4:
//       await EditReference(1, [initial2[3].laserPower])
//       await EditReference(5, [initial2[3].zhankongbi])
//       await EditReference(3, [initial2[3].pinglv])
//       await EditReference(7, [initial2[3].baifu])
//       await EditReference(9, [initial2[3].baidongpinglv])
//       await EditReference(95, [initial2[3].songsisudu])
//       break
//     case 5:
//       await EditReference(1, [initial2[4].laserPower])
//       await EditReference(5, [initial2[4].zhankongbi])
//       await EditReference(3, [initial2[4].pinglv])
//       await EditReference(7, [initial2[4].baifu])
//       await EditReference(9, [initial2[4].baidongpinglv])
//       await EditReference(95, [initial2[4].songsisudu])
//       break
//     case 6:
//       await EditReference(1, [initial2[5].laserPower])
//       await EditReference(5, [initial2[5].zhankongbi])
//       await EditReference(3, [initial2[5].pinglv])
//       await EditReference(7, [initial2[5].baifu])
//       await EditReference(9, [initial2[5].baidongpinglv])
//       await EditReference(95, [initial2[5].songsisudu])
//       break
//     case 7:
//       await EditReference(1, [initial2[6].laserPower])
//       await EditReference(5, [initial2[6].zhankongbi])
//       await EditReference(3, [initial2[6].pinglv])
//       await EditReference(7, [initial2[6].baifu])
//       await EditReference(9, [initial2[6].baidongpinglv])
//       await EditReference(95, [initial2[6].songsisudu])
//       break
//     default:
//       console.log('24')
//       break
//   }
// }

// 发送修改请求

async function EditReference(startid, values) {
  // 写入寄存器
  const response = await axios.post(`/api/registers/${startid}`, {
    value: values,
  })
}
// 还原请求成功
let isResting = false
// 还原请求
async function RestoreReference() {
  if (isResting) {
    return
  }
  isResting = true
  const requests = [
    { url: '/api/registers/1', value: [300] },
    { url: '/api/registers/5', value: [100] },
    { url: '/api/registers/7', value: [2] },
    { url: '/api/registers/9', value: [100] },
    { url: '/api/registers/3', value: [1000] },
    { url: '/api/registers/95', value: [''] },
  ]
  for (const request of requests) {
    const response = await axios.post(request.url, {
      value: request.value,
    })
    console.log(response)
  }
  isResting = false
}
// 读取还原的值
// async function
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
        <tr
          class="reference-content-tr"
          :key="index"
          v-for="(item, index) in initial2">
          <td @click="clickNumber(item.number)">{{ item.number }}</td>
          <td>{{ item.bancai }}</td>
          <td>{{ item.houdu }}</td>
          <td>
            <input v-model="item.laserPower" class="input" type="number" />
          </td>
          <td>
            <input v-model="item.zhankongbi" class="input" type="number" />
          </td>
          <td>
            <input v-model="item.pinglv" class="input" type="number" />
          </td>
          <td>
            <input v-model="item.baifu" class="input" type="number" />
          </td>
          <td>
            <input v-model="item.baidongpinglv" class="input" type="number" />
          </td>
          <td>
            <input :value="item.songsisudu" class="input" type="number" />
          </td>
          <td><input :value="item.beizhu" class="input" /></td>
        </tr>
      </table>
    </div>

    <div class="referencebottom">
      <div class="refitem1">工艺号</div>
      <div class="refitem5">
        {{ setGonyi }}
      </div>
      <div class="refitem2" @click="applyReference">调用</div>
      <div class="refitem3" @click="elecSave">断电保存</div>
      <div class="refitem4" @click="returnState">还原</div>
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
.input {
  background: #47628f;
  height: 50px;
  width: 120px;
  text-align: center;
}
</style>
