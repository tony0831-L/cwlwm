<template>
  <div class="home">
    <search/>
    <div class="re">
      <h1>recommand:</h1>
      <div class="res">
        <res :res="i" v-for="(i,index) in res" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import getInfo from '../utils/getInfo.js'
import search from '../components/serach.vue'
import res from '../components/restarun.vue'
export default {
  name: 'Home',
  components:{
    search:search,
    res:res
  },
  data(){
    return{
      res:[],
    }
  },
  mounted(){
    getInfo.getRes().then(res=>{
      this.res=res.data
    })
  }
}
</script>
<style lang="scss" scoped>
  .home{
    margin-top: 11rem;
    .re{
      text-align: left;
      padding: 2%;
      .res{
        display: flex;
      }
      h1{
        margin-left: 2%;
        font-weight: 400;
      }
    }
  }
</style>
