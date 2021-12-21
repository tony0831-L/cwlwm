<template>
<div class="container">
      <div class="login">
      <div class="img">
          <img :src="user.img" alt="">
      </div>
        <div class="input">
            <div class="block"></div>
            <input type="text" v-model="user.name" placeholder="Account/Username">
        </div>
      <div class="input">
          <div class="block"></div>
          <input type="password" v-model="user.pass" placeholder="password">
      </div>
      <button @click="login">
          login
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
      login(){
          sign.login(this.user).then(res=>{
              if(res.data.stat){
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
                background-color: #C4C4C4;
                overflow: hidden;
                align-items: center;
                img{
                    max-width: 100%;
                }
            }
            input{
                width: 37.8rem;
                height: 4rem;
                text-align: center;
            }
            .block{
                position: absolute;
                width: 10rem;
                height: 4rem;
                background: #FFDA58;
            }
            button{
                align-self: flex-end;
                cursor: pointer;
                width: 13rem;
                height: 3.8rem;
                background: #575757;
                color: #fff;
            }
        }
    }
</style>
