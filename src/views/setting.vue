<template>
<div class="main">
    <div class="main-container">
        <div class="img">
            <img :src="user.img" alt="">
        </div>
        <div class="input">
            <div class="block">Account</div>
            <input type="text" v-model="user.name" placeholder="Account/Username">
            <div class="block">Password</div>
            <input type="text" v-model="user.pass" placeholder="Account/Password">
            <div class="block">頭像連結</div>
            <input type="text" v-model="user.img" placeholder="Account/Selfimage">
        </div>
        <div class="main-btn" @click="submit">
            確認
        </div>
    </div>
</div>
<nav-top/>
</template>

<script>
import postData from '../utils/postData.js'
import navTop from '../components/navTop.vue'
export default {
    name:"setting",
    components:{
        navTop:navTop,
    },
    data(){
        return{
            user:{
            }
        }     
    },
    methods:{
        submit(){
            postData.editUser({name:this.user.name,data:this.user}).then(res=>{
                if(res.data.stat){
                    this.$router.push("/")
                }
            })
        } 
    },
    mounted(){
        if(!JSON.parse(localStorage.getItem("userInfo")).name){
            this.$router.replace('/login')
                }else{
                    this.user=JSON.parse(localStorage.getItem("userInfo"))
                }     
        }
}
</script>
<style lang="scss" scoped>
@import url('../sass/anime.scss');
.main{
    display: flex;
    justify-content: center;
    padding-top:20rem;

    .main-container{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding-bottom: 10px;
        padding-bottom: 3rem;
        border-bottom:solid 3px #6b6a6a;
        animation-name: fadein;
        animation-duration: 2s;
        .img{
        width: 16rem;
        height: 16rem;
        justify-content: center;
        border-radius: 100%;
        background-color: #313131;
        border: solid 1px #31313109;
        display: flex;
        align-items: center;
        overflow: hidden;
        img{
            max-width: 100%;
        }
    }
    .input{
        padding-left: 5rem;
        line-height: 2rem;
        .block{
            font-size: 20px;
        }
    }
    .main-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        top: 20.5rem;
        height: 3rem;
        padding: 0em 2rem;
        font-size: 20px;
        border: solid 5px #FFDA58;;
        margin-left: 3rem;
        cursor: pointer;

        &:hover{
            font-size: 25px;
            transition:all 0.5s;
        }
    }
    }
}
</style>
