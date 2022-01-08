<template>
<navTop/>
<div class="container">
    <div class="list">
      <order v-for="(i,index) in dList" :key="index" :data="i"/>
    </div>
    <div class="price">
      <p v-for="(i,index) in dList" :key="index">
        {{i.name}}x1&nbsp;&nbsp;&nbsp;&nbsp;{{i.price}}
      </p>
      total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{total}}
    </div>
</div>
</template>

<script>
import navTop from "../components/navTop.vue"
import order from "../components/order.vue"
export default {
  name: 'cart',
  components:{
      navTop: navTop,
      order:order,
  },
  data(){
      return{
        name:JSON.parse(localStorage.getItem("dList")).name,
        dList:JSON.parse(localStorage.getItem("dList")).list,
        total:0
      }
  },
  methods:{
    init(){
      this.name=JSON.parse(localStorage.getItem("dList")).name,
      this.dList = JSON.parse(localStorage.getItem("dList")).list
      Object.keys(this.dList).forEach((key) => {
        this.total+=parseInt(this.dList[key].price)
      })
    }
  },
  mounted(){
    this.init();
  },
}
</script>
<style lang="scss" scoped>
  .container{
    padding: 5.3rem;
    .list{
      width:100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      padding-bottom: 3rem;
      border-bottom: solid 1px #000;
    }
    .price{
      padding: 1%;
      font-size: 1.2rem;
      text-align: right;
    }
  }
</style>
