// 读写一个特殊寄存器
// create an empty modbus client
// const ModbusRTU = require('modbus-serial')
import { ModbusRTU } from 'modbus-serial'
const client = new ModbusRTU()

// open connection to a serial port
client.connectRTUBuffered('/dev/ttyS3', { baudRate: 57600 })
// set timeout, if slave did not reply back
client.setTimeout(500)

// 读取多个寄存器的值
const metersIdList = [1, 3, 5, 7, 9]

const getMetersValue = async meters => {
  try {
    // get value of all meters
    for (let meter of meters) {
      // output value to console
      console.log(await getMeterValue(meter))
      // wait 100ms before get another device
      await sleep(100)
    }
  } catch (e) {
    // if error, handle them here (it should not)
    console.log(e)
  } finally {
    // after get all data from slave, repeat it again
    setImmediate(() => {
      getMetersValue(metersIdList)
    })
  }
}

const getMeterValue = async id => {
  try {
    // set ID of slave
    await client.setID(id)
    // read the 1 registers starting at address 0 (first register)
    let val = await client.readInputRegisters(0, 1)
    // return the value
    return val.data[0]
  } catch (e) {
    // if error return -1
    return -1
  }
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// start get value
getMetersValue(metersIdList)
// 线圈读取多个寄存器的值
const coilsIdList = [1, 2, 3, 4, 5, 10, 15, 17, 18, 19]
const getCoilsValue = async coils => {
  const result = []
  try {
    for (let coil of coils) {
      result.push(await getCoilsValue(coil))
    }
    return result
  } catch (e) {
    console.log(e)
    return result
  }
}
const getCoilValue = async id => {
  try {
    await client.setID(id)
    let val = await client.readCoilds(0, 1)
    return val.data[0]
  } catch (error) {
    return false
  }
}
;async () => {
  await client.connectRTUBuffered('/dev/ttyS3', { baudRate: 9600 })
  await client.setTimeout(500)

  const values = await getCoilsValue(coilsIdList)
  console.log(values)

  await client.close()
}

// 写入多个线圈的值
const setColisValue = async (ids, values) => {
  try {
    for (let i = 0; i < ids.length; i++) {
      await client.writeCoils(ids[i], [values[i]])
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
