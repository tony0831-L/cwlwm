<template>
<navTop/>
<div class="container">
    <div class="list">
      <order v-for="(i,index) in dList" :key="index" :data="i"/>
    </div>
    <div class="info">
      <div class="name">
        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="'https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q='+pos.lat+','+pos.lng+'&z=20&output=embed'"></iframe>
        <div class="in">
          {{name}}&nbsp;{{dList.length}}份訂單
        </div>
      </div>
      <div class="price">
        <p v-for="(i,index) in dList" :key="index">
          {{i.name}}x1&nbsp;&nbsp;&nbsp;&nbsp;{{i.price}}
        </p>
        total&nbsp;&nbsp;&nbsp;&nbsp;{{total}}
      </div>
    </div>
    <input class="comment" placeholder="comment" v-model="comment">
    <button @click="commit">sure</button>
</div>
</template>

<script>
import navTop from "../components/navTop.vue"
import order from "../components/order.vue"
import postData from '../utils/postData'
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
        comment:"",
        total:0,
        pos:{}
      }
  },
  methods:{
    init(){
      this.name=JSON.parse(localStorage.getItem("dList")).name,
      this.dList = JSON.parse(localStorage.getItem("dList")).list
      Object.keys(this.dList).forEach((key) => {
        this.total+=parseInt(this.dList[key].price)
      })
      navigator.geolocation.getCurrentPosition(pos=>{
        this.pos={
          lat:pos.coords.latitude,
          lng:pos.coords.longitude
        }
      })
    },
    commit(){
      let data={
        "res":this.name,
        "consumer":JSON.parse(localStorage.getItem("userInfo")).name,
        "list":this.dList,
        "star":"5",
        "comment":this.comment
      }
      postData.trade(data).then(res=>{
        console.log(res)
      })
      this.$router.replace('/')
      alert("訂單已送出")
      localStorage.setItem("dList",JSON.stringify({
        name:"",
        list:[]
      }));
    }
  },
  mounted(){
    if(this.dList.length==0){
        this.$router.replace('/')
        alert("購物車為空")
    }
    this.init();
  },
}
</script>
<style lang="scss" scoped>
*{
  font-size: 1.2rem;
}
  .container{
    padding: 10.6rem 5.3rem;
    padding-bottom: 2.6rem;
    display: flex;
    flex-direction: column;
    .list{
      width:100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      padding-bottom: 3rem;
      border-bottom: solid 1px #000;
    }
    .info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      .name{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        .in{
          margin-top: 2.5rem;
          position: absolute;
          pointer-events: none;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          padding: 2%;
        }
        iframe{
            opacity: .7;
            width: 30rem;
            height: 15rem;
            &:hover{
                transition: all .75s;
                opacity: 1;
            }
        }
      }
      .price{
        text-align: right;
      }
    }
    .comment{
      width: 100%;
      height: 9rem;
      border: none;
      background: #C4C4C4;
      text-align: center;
      
    }
    button{
      cursor: pointer;
      margin-top: 1.2rem;
      color: #C4C4C4;
      width: 11rem;
      height: 3.5rem;
      background: #575757;
      align-self: flex-end;
    }
  }
</style>
