/* globals describe test expect */
import {
  get6Array, getDataView, getUint32, getUint32LE, getBytes,
  subByte, subByteLE,
} from './index'
import { ais1byteArray, msg5byteArray } from './mock'

describe('subByte', () => {
  test('returns number', () => {
    const num1 = 0b11111111 // 255
    expect(subByte(num1, 0, 3)).toBe(0b111)
    expect(subByte(num1, 1, 7)).toBe(0b1111111)
    const num2 = 0b10110101 // 181
    expect(subByte(num2, 2, 3)).toBe(0b110)
    expect(subByte(num2, 3, 5)).toBe(0b10101)
    const num3 = 0b10100101 // 165
    expect(subByte(num3, 3, 3)).toBe(0b1)
    const num4 = 0b10000001 // 129
    expect(subByte(num4, 3, 3)).toBe(0b0)
    const num5 = 0b00011100
    expect(subByte(num5, 3, 4)).toBe(0b1110)
  })
})
describe('subByteLE', () => {
  test('returns a slice of the byte', () => {
    const num1 = 0b00001111
    expect(subByteLE(num1, 0, 3)).toBe(0b111)
    expect(subByteLE(num1, 0, 4)).toBe(0b1111)
    expect(subByteLE(num1, 4, 4)).toBe(0b0000)
    const num2 = 0b10110101
    expect(subByteLE(num2, 2, 3)).toBe(0b101)
    // expect(subByteLE(num2, 3, 5)).toBe(0b10101)
    // const num3 = 0b10100101 // 165
    // expect(subByteLE(num3, 3, 3)).toBe(0b1)
    // const num4 = 0b10000001 // 129
    // expect(subByteLE(num4, 3, 3)).toBe(0b0)
    // const num5 = 0b00011100
    // expect(subByteLE(num5, 3, 4)).toBe(0b1110)
  })
})
describe('getUint32', () => {
  test('returns bits', () => {
    expect(getUint32(ais1byteArray, 0, 6)).toBe(18)
    expect(getUint32(ais1byteArray, 6, 2)).toBe(0)
    expect(getUint32(ais1byteArray, 8, 30)).toBe(367572690)
    expect(getUint32(msg5byteArray, 8, 30)).toBe(378112714)
    const data = getBytes(msg5byteArray, 0, 48)
    expect(data).toEqual(msg5byteArray.slice(0, 6))
    expect(getUint32(data, 8, 30)).toBe(378112714)
    const data2 = get6Array(msg5byteArray, 112, 120)
    expect(data2).toEqual(new Uint8Array([
      2, 12, 1, 3, 11, 32, 7, 15, 12, 4, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32]))
    // const data3 = get6Array(msg5byteArray, 70, 42)
    // console.log(data3)
  })
})
describe('getUint32LE', () => {
  const val = new Uint8Array([0, 0, 192, 44, 0, 170, 70, 192])
  test('returns bits', () => {
    expect(getUint32LE(val, 0, 21)).toBe(0)
    expect(getUint32LE(val, 22, 11)).toBe(0)
  })
})

describe('getDataView', () => {
  expect(getDataView(msg5byteArray, 0, 6).getUint8(0)).toEqual(5)
})
