<template>
  <div class="home">
    <search v-show="res.length"/>
    <div class="loading" v-show="!res.length">
      <img src="../assets/loading.gif" alt="loading">
      <h2>loading...</h2>
    </div>
    <div class="re" v-show="res.length">
      <h2>人氣精選✨</h2>
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
  methods:{
    init(){
      getInfo.getRes().then(res=>{
        if(res.data.length==0){
          setTimeout(()=>{
            console.log(res.data.length)
            this.init()
          },1000)
        }else{
          this.res=res.data
        }
      })
    }
  },
  mounted(){
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import url('../sass/anime.scss');
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
        animation-name: fadein;
        animation-duration: 1.5s;
      }
      h1{
        margin-left: 2%;
        font-weight: 400;
      }
      h2{
        margin-left: 4rem;
        font-size: 2rem;
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
