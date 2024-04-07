# vite-plugin-data-url-query

![npm](https://img.shields.io/npm/v/vite-plugin-data-url-query?style=flat-square)
![npm](https://img.shields.io/npm/dm/vite-plugin-data-url-query?style=flat-square)
![GitHub](https://img.shields.io/github/license/yue1123/vite-plugin-data-url-query?style=flat-square)

Extend vite import query to add data-url import. You can talk about importing the data-url encoding of a resource directly.

## 📦 Install

```shell
npm i vite-plugin-data-url-query -D

# yarn
yarn add vite-plugin-data-url-query -D

# pnpm
pnpm add vite-plugin-data-url-query -D
```

## 🦄 Usage

Add envParse plugin to vite.config.js / vite.config.ts and configure it:

```ts
// vite.config.js / vite.config.ts
import { dataUrlQuery } from 'vite-plugin-data-url-query'

export default {
  plugins: [dataUrlQuery()]
}
```

## Typescript

Add types for `?data-url`

```json
"complierOptions":{
  // ...
  "types": ["vite-plugin-data-url-query/types"]
  // ...
}

```

## API

### Base64ImportOptions

| Property Name | Type      | Description                                                                                                                | Default Value |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| sizeWarning   | `boolean` | Whether to disable the warning when specified files exceed the set size limit.                                             |  `true`          |
| limit         | `number`  | The maximum file size (in KB) for converting to base64. If exceeded, a warning will be given and the file will be ignored. | `10 * 1024`   |

## License

[MIT licenses](https://opensource.org/licenses/MIT)
