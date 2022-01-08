<template>
  <nav-top/>
  <div class="home">
    <search/>
    <h2 v-show="!res.length">loading.....</h2>
    <div class="re">
      <div class="ress">
        <res :res="i" v-for="(i,index) in res" :key="index"/>
      </div>
    </div>
  </div>
  <foot/>
</template>

<script>
import navTop from '../components/navTop.vue'
import getInfo from '../utils/getInfo.js'
import search from '../components/serach.vue'
import res from '../components/restarun.vue'
import foot from '../components/footer.vue'
export default {
  name: 'Home',
  components:{
    search:search,
    res:res,
    navTop:navTop,
    foot:foot,
  },
  data(){
    return{
      i:3,
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
    margin: 3.1rem 0rem;
    .re{
      text-align: left;
      padding: 1% 2%;
      .ress{
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }
      h1{
        margin-left: 2%;
        font-weight: 400;
      }
    }
  }
</style>
