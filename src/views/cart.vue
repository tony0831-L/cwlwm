<template>
<div class="container">
    cart
    {{dList}}
</div>
</template>

<script>
export default {
  name: 'cart',
  data(){
      return{
        dList:JSON.parse(localStorage.getItem("dList"))
      }
  },
  methods:{
    init(){
      this.dList = JSON.parse(localStorage.getItem("dList"))
    }
  },
  mounted(){
    this.init();
  },
}
</script>
<style lang="scss" scoped>

</style>
