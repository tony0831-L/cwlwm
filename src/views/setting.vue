<template>
  <h1>
      setting
  </h1>
</template>

<script>
export default {
    name:"setting",
    data(){
        return{
            user:{}
        }
    },
    mounted(){
        if(!JSON.parse(localStorage.getItem("userInfo")).name){
            this.$router.replace('/login')
        }else{
            this.user=JSON.parse(localStorage.getItem("userInfo"))
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
