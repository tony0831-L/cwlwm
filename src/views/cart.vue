<template>
<navTop/>
<div class="container">
    cart
    {{dList}}
</div>
</template>

<script>
import navTop from "../components/navTop.vue"
export default {
  name: 'cart',
  components:{
      navTop: navTop,
  },
  data(){
      return{
        name:JSON.parse(localStorage.getItem("dList")).name,
        dList:JSON.parse(localStorage.getItem("dList")).list
      }
  },
  methods:{
    init(){
      this.name=JSON.parse(localStorage.getItem("dList")).name,
      this.dList = JSON.parse(localStorage.getItem("dList")).list
    }
  },
  mounted(){
    this.init();
  },
}
</script>
<style lang="scss" scoped>
  .container{
    width:100%;
  }
</style>
