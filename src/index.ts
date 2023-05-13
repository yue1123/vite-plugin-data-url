import path from 'node:path'
import fs from 'node:fs'
import type { Plugin } from 'vite'
import base64Img from 'base64-img'
export interface Base64ImportOptions {
  /**
   * Whether to disable the warning when specified files exceed the set size limit.
   */
  disableSizeWarning?: boolean
  /**
   * 	The maximum file size (in KB) for converting to base64. If exceeded, a warning will be given and the file will be ignored.
   * @default 512
   */
  sizeLimit?: number
}

function errorLog(isWarn: boolean, content: string) {
  console.log('\n')
  console.log(`${isWarn ? '\x1b[33m' : '\x1b[31m'}%s%s\x1b[0m`, `${isWarn ? '⚠️ ' : '✘ '}[base64-import] - `, content)
  console.log()
}
/**
 * 获取文件大小
 * @returns fileSize
 */
function getFileSize(filePath: string) {
  const stats = fs.statSync(filePath)
  if (stats) {
    return stats.size / 1024
  }
  return 0
}

export function base64Import(options: Base64ImportOptions = {}): Plugin {
  const defaultOptions = {
    disableSizeWarning: false,
    sizeLimit: 512
  }
  const _options: Required<Base64ImportOptions> = Object.assign(defaultOptions, options)
  const cache = new Map<string, string>()
  const root = process.cwd()
  const query = '?base64'
  return {
    name: 'base64-import',
    transform(_, id) {
      if (id.includes(query)) {
        try {
          let data: string | void = cache.get(id)
          if (!data) {
            const filePath = path.resolve(root, id.replace(query, ''))
            if (getFileSize(filePath) > _options.sizeLimit) {
              !_options.disableSizeWarning &&
                errorLog(
                  true,
                  `File ${id} is exceed the limit ${_options.sizeLimit}kb, conversion to base64 is not recommended.`
                )
              return
            }
            data = base64Img.base64Sync(filePath)
            cache.set(id, data as string)
          }
          return `export default "${data}"`
        } catch (error: any) {
          console.log(error)
          errorLog(false, error.message || error)
        }
      }
    }
  }
}

