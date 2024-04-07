import fs from 'node:fs'

/**
 * get file size
 * @returns fileSize
 */
export function getFileSize(filePath: string) {
  return new Promise<number>((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) reject(err)

      resolve(stats.size)
    })
  })
}

/**
 * get file size
 * @returns fileSize
 */
export function readFile(filePath: string) {
  return new Promise<Buffer>((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err)

      resolve(data)
    })
  })
}

/**
 * svg to data-uri
 * @param buffer file buffer
 * @link https://github.com/filamentgroup/directory-encoder/blob/master/lib/svg-uri-encoder.js
 * @returns string data-uri
 */
export function encodeSVG(buffer) {
  return (
    encodeURIComponent(
      buffer
        .toString('utf-8')
        // strip newlines and tabs
        .replace(/[\n\r]/gim, '')
        .replace(/\t/gim, ' ')
        // strip comments
        .replace(/<!--(.*(?=-->))-->/gim, '')
        // replace
        .replace(/'/gim, '\\i')
    )
      // encode brackets
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
  )
}
