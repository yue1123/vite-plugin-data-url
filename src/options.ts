export interface Options {
  /**
   * Whether to disable the warning when specified files exceed the set size limit.
   * @default true
   */
  sizeWarning?: boolean
  /**
   * The maximum file size (in KB) for converting to base64. If exceeded, a warning will be given and the file will be ignored.
   * @default 10 * 1024 (10kb)
   */
  limit?: number
}
