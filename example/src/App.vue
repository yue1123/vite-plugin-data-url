<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  // import a from 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yZWRjZTIzOWE4Mzc3MjMxODQyNWFlNDFhZWU0ZjYzNz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.beDkTWt1pbcEbc3Skv-HcRmwAkhtY3LmpNuD5e_G5xo?base64'

  // console.log(a)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Base64 Import" />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
