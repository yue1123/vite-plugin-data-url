<script setup lang="ts">
  import { ref } from 'vue'
  import base64Img from '../assets/44051676621973_.pic.jpg?data-url'
  import vite from '../assets/vite.svg?data-url'

  defineProps<{ msg: string }>()

  console.log(vite)
  import('../assets/44051676621973_.pic.jpg?data-url').then((res) => {
    console.log(res, '========')
  })
  console.log(
    import.meta.glob('../assets/*.jpg', {
      eager: true,
      query: '?data-url'
    })
  )
</script>

<template>
  <img :src="base64Img" alt="" />
  <img :src="vite" style="margin-left: 200px" alt="" />
  <hr />
  <textarea disabled rows="10" :cols="40">
    {{ base64Img }}
  </textarea>
  <textarea disabled rows="10" :cols="40">
    {{ vite }}
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
