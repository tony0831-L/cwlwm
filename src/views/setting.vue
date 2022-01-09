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
        <div class="main-btn">
            確認
        </div>
    </div>
</div>
<nav-top/>
</template>

<script>
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
.main{
    padding: 20rem;
    padding-top:20rem;
    .main-container{
        display: flex;
        flex-direction: row;
        .img{
        width: 16rem;
        height: 16rem;
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
        left: 60rem;
        height: 3rem;
        padding: 0em 2rem;
        position: absolute;
        font-size: 20px;
        border: solid 5px #FFDA58;;
    }
    }
}
</style>
