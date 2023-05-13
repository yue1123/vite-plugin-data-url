# vite-plugin-base64-import

![npm](https://img.shields.io/npm/v/vite-plugin-base64-import?style=flat-square)
![npm](https://img.shields.io/npm/dm/vite-plugin-base64-import?style=flat-square)
![GitHub](https://img.shields.io/github/license/yue1123/vite-plugin-base64-import?style=flat-square)

Encoding img to base64 with base64 import query

## 📦 Install

```shell
npm i vite-plugin-base64-import -D

# yarn
yarn add vite-plugin-base64-import -D

# pnpm
pnpm add vite-plugin-base64-import -D
```

## 🦄 Usage

Add envParse plugin to vite.config.js / vite.config.ts and configure it:

```ts
// vite.config.js / vite.config.ts
import { envParse } from 'vite-plugin-base64-import'

export default {
  plugins: [envParse()]
}
```

## Typescript 

Add types for `?base64`
```json
"complierOptions":{
  // ...
  "types": ["vite-plugin-base64-import/types"]
  // ...
}

```

## API

### Base64ImportOptions

| Property Name      | Type      | Description                                                                                                                | Default Value |
| ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| disableSizeWarning | `boolean` | Whether to disable the warning when specified files exceed the set size limit.                                             |               |
| sizeLimit          | `number`  | The maximum file size (in KB) for converting to base64. If exceeded, a warning will be given and the file will be ignored. | `512`         |

## License

[MIT licenses](https://opensource.org/licenses/MIT)
