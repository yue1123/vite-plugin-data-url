<script setup lang="ts">
  import { ref } from 'vue'
  import base64Img from '../assets/44051676621973_.pic.jpg?base64'

  defineProps<{ msg: string }>()

  const count = ref(0)
  function base64ToBlob(base64String: string) {
    const mimeMatch = base64String.match(/^data:(.*);base64,/)
    const contentType = mimeMatch ? mimeMatch[1] : ''
    console.log(contentType)
    const bytes = new Uint8Array(base64String.length)
    for (let i = 0; i < base64String.length; i++) {
      bytes[i] = base64String.charCodeAt(i)
    }
    // const decoder = new TextDecoder('utf-8')
    // const decodedData = decoder.decode(bytes)
    // const mimeMatch = decodedData.match(/^data:(.*);base64,/)
    // const contentType = mimeMatch ? mimeMatch[1] : ''
    // const blob = new Blob([bytes], { type: 'text/plain' })
    return blob
  }
  function blobToUrl(blob) {
    const url = URL.createObjectURL(blob)
    return url
  }
  const blobUrl = blobToUrl(base64ToBlob(base64Img))
  console.log(blobUrl)
</script>

<template>
  <h1>{{ msg }}</h1>

  <img :src="blobUrl" alt="" />
  <hr />
  <textarea disabled rows="10" :cols="40">
    {{ base64Img }}
  </textarea>
  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
