<template>
  <router-view/>
</template>

<script>
  export default {
    name:"app",
    setup(){
      localStorage.setItem("userInfo",JSON.stringify({}));
      localStorage.setItem("dList",JSON.stringify({
        name:"",
        list:[]
      }));
    }
  }
</script>

<style lang="scss">
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    transition-timing-function: ease;
  }
  html {
    font-size:90%;
  }
  #app {
    font-family: 'Roboto','Source Han Sans TW',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#010101;;
  }
</style>
