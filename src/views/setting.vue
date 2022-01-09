<template>
  <h1>
      setting
  </h1>
</template>

<script>
export default {
    name:"setting",
    mounted(){
        if(!JSON.parse(localStorage.getItem("userInfo")).name){
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
