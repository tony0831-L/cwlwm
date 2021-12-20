<template>
<div class="container">
      <div class="login">
      <div class="img">
          <img :src="user.img" alt="">
      </div>
      <input type="text" v-model="user.name">
      <input type="password" v-model="user.password">
      <button>
          login
      </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data(){
      return{
          user:{
              name:"",
              password:"",
              img:"",
          }
      }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
    .container{
        margin-top: 11rem;
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
                width: 16.875rem;
                height: 16.875rem;
                border-radius: 100%;
                background-color: #C4C4C4;
            }
            input{
                width: 37.8rem;
                height: 4rem;
            }
            button{
                align-self: flex-end;
                cursor: pointer;
                width: 13rem;
                height: 3.8rem;
                background: #575757;
            }
        }
    }
</style>
