<template>
<div class="container">
      <div class="login">
      <div class="img">
          <img :src="user.img" alt="" v-if="user.img">
          <i class="bi bi-person-circle" v-else></i>
      </div>
        <div class="input">
            <div class="block">thumbnail</div>
            <input type="text" v-model="user.img" placeholder="image url">
        </div>
        <div class="input">
            <div class="block">Account</div>
            <input type="text" v-model="user.name" placeholder="Account/Username">
        </div>
      <div class="input">
          <div class="block">password</div>
          <input type="password" v-model="user.pass" placeholder="password">
      </div>
      <button @click="regi">
          register
      </button>
  </div>
</div>
</template>

<script>
import sign from '../utils/sign.js'
export default {
  name: 'login',
  data(){
      return{
          user:{
              name:"",
              pass:"",
              img:"",
          }
      }
  },
  methods:{
      regi(){
          sign.regi(this.user).then(res=>{
              if(res.data.message=="註冊成功"){
                this.$router.replace('/')
                this.user=(res.data.info)
                localStorage.setItem("userInfo",
                    JSON.stringify(res.data.info)
                )
              }else{
                  alert(res.data.message)
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
    .container{
        margin-top: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .login{
            width: 37.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            .img{
                display: flex;
                justify-content: center;
                width: 16.875rem;
                height: 16.875rem;
                border-radius: 100%;
                overflow: hidden;
                align-items: center;
                i{
                    font-size:16rem;
                    color: #C4C4C4;
                }
            }
            input{
                width: 37.8rem;
                height: 4rem;
                text-align: center;
                border-radius:3rem;
            }
            .block{
                position: absolute;
                width: 10rem;
                height: 4rem;
                background: #FFDA58;
                border-top-left-radius: 2rem;
                border-bottom-left-radius: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            button{
                align-self: flex-end;
                cursor: pointer;
                width: 13rem;
                height: 3.8rem;
                background: #575757;
                color: #fff;
                border-radius:3rem;
            }
        }
    }
</style>
