<template>
  <div class="home">
    <search v-show="res.length"/>
    <div class="loading" v-show="!res.length">
      <img src="../assets/loading.gif" alt="loading">
      <h2>loading...</h2>
    </div>
    <div class="re">
      <div class="ress">
        <res :res="i" v-for="(i,index) in res" :key="index"/>
      </div>
    </div>
  </div>
  <nav-top/>
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
    padding-top:6.6rem;
    margin: 4.1rem 0rem;
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
    .loading{
      font-size: 1.5rem;
      margin: 15.5rem;
      h2{
        margin-top: -3%;
      }
    }
  }
</style>
