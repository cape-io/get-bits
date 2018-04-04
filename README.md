# get-bits v1.0.0

Use this when you need to get/slice some bits at an arbitrary bit index from a byte or Uint8Array. Something like a bit-array, bit vector, bit string, bit set, or whatever they are called. Should work equally well in browser or in node. These are only getters.

## Usage
### Install

If you're using Node.js type:

```shell
npm install --save bits
```

or

```shell
yarn add bits
```

### Require

```javascript
const { getBytes } = require('get-bits')
```

or

```javascript
import { getBytes } from 'get-bits'
```

## API

### `subByte(num, start, length)`
Bits from a number. Assuming you're working with an 8 bit number.

### `getUint32(Uint8Array, start, length)`

### `getDataView(Uint8Array, start, length)`

### `getBytes(Uint8Array, start, length)`

### `get6Array()`
Handy for Base64 encoding.

### `getIntOrBytes(Uint8Array, start, length, [get6=false])`
