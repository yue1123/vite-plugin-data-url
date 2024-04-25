type DataUrl = `data:image/${string}`
declare const dataUrl: DataUrl

declare module '*?data-url' {
  export default dataUrl
}
