type DataUrl = `data:image/${string}`
const dataUrl: DataUrl

declare module '*?data-url' {
  export default dataUrl
}
