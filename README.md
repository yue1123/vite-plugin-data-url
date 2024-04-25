# vite-plugin-data-url

![npm](https://img.shields.io/npm/v/vite-plugin-data-url-query?style=flat-square)
![npm](https://img.shields.io/npm/dm/vite-plugin-data-url-query?style=flat-square)
![GitHub](https://img.shields.io/github/license/yue1123/vite-plugin-data-url-query?style=flat-square)

Add support for data-url query import, you can directly import the data-url address of the image.

## 📦 Install

```shell
npm i vite-plugin-data-url -D

# yarn
yarn add vite-plugin-data-url -D

# pnpm
pnpm add vite-plugin-data-url -D
```

## 🦄 Usage

Add envParse plugin to vite.config.js / vite.config.ts and configure it:

```ts
// vite.config.js / vite.config.ts
import { dataUrl } from 'vite-plugin-data-url'

export default {
  plugins: [dataUrl()]
}
```

## Typescript

Add types for `?data-url`

```json
"complierOptions":{
  // ...
  "types": ["vite-plugin-data-url/types"]
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
