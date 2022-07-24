# get-bits v1.0.1

Use this when you need to get/slice some bits at an arbitrary bit index from a byte or Uint8Array. This is something like a bit-array, bit vector, bit string, bit set, or whatever they are called. Should work equally well in browser or in node. These are only getters.

## Usage

### Install

If you're using Node.js type:

```shell
npm install --save get-bits
```

or

```shell
yarn add get-bits
```

### Require

```javascript
const { getBytes } = require('get-bits')
```

or

```javascript
import { getUint32 } from 'get-bits'

const data = new Uint8Array([
  72, 87, 162, 219, 72, 0, 1, 233, 250, 17, 8, 242, 212, 110, 88, 191, 252, 101, 222, 0, 6])
getUint32(data, 0, 6) // 18
getUint32(data, 8, 30) // 367572690
```

## API

### `subByte(num, start, length)`
Bits from a number. Assuming you're working with an 8 bit number.

### `subByteLE(num, start, length)`
Bits from a number Little Endian. Assuming you're working with an 8 bit number.

### `getUint32(Uint8Array, start, length)`

### `getDataView(Uint8Array, start, length)`

### `getBytes(Uint8Array, start, length)`

### `get6Array()`
Handy for Base64 encoding/decoding.

### `getIntOrBytes(Uint8Array, start, length, [get6=false])`

### `getUint32LE()`
