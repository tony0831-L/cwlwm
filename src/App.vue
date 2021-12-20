<template>
  <nav-top/>
  <router-view/>
</template>

<script>
import navTop from './components/navTop.vue'
  export default {
    name:"app",
    components:{
      navTop:navTop
    },
  }
</script>

<style lang="scss">
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-size:100%;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#010101;;
  }
</style>
