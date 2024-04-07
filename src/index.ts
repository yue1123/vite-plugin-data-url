import path from 'node:path'
import { type Plugin, ViteDevServer } from 'vite'
import { Options } from './options'
import { encodeSVG, getFileSize, readFile } from './utils'
import { NAME, queryReg } from './constants'
import mime from 'mime'

export function dataUrlQuery(options: Options = {}): Plugin {
  const { limit = 10 * 1024, sizeWarning = true } = options

  const root = process.cwd()
  const cache = new Map<string, string>()
  let isDev = false
  let server: ViteDevServer
  return {
    name: NAME,
    configResolved(config) {
      const { command } = config
      isDev = command === 'serve'
    },
    configureServer(_server) {
      server = _server
    },
    async transform(_, id) {
      if (!queryReg.test(id)) return

      try {
        const _id = id.replace(queryReg, '')
        let data: string | void = cache.get(id)

        if (!data) {
          const filePath = path.resolve(root, _id)
          const size = await getFileSize(filePath)

          if (size > limit && sizeWarning) {
            let importerId, fileUrl
            if (isDev) {
              const module = server.moduleGraph.getModuleById(id)
              if (module) {
                const [first] = module.importers
                importerId = first.url
                fileUrl = module.url
              }
            }

            return this.warn({
              id: importerId,
              message: `File ${fileUrl} size ${size} bytes is exceed the limit ${limit} bytes, too long a data-url will make the generated code too large.`
            })
          }
          const buffer = await readFile(filePath)

          const mimetype = mime.getType(filePath)
          const isSVG = mimetype === 'image/svg+xml'
          const encoding = isSVG ? '' : ';base64'

          data = isSVG ? encodeSVG(buffer) : buffer.toString('base64')
          data = `data:${mimetype}${encoding},${data}`
        }

        cache.set(id, data as string)

        return {
          code: `export default "${data}"`,
          map: null
        }
      } catch (error: any) {
        this.error({
          stack: error.stack,
          message: error.message || 'Meet some error'
        })
      }
    }
  }
}
