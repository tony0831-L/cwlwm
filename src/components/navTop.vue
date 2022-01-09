<template>
<nav>
    <router-link to="/" class="home">
        <h2><i class="bi bi-house-fill"></i></h2>
    </router-link> 
    <div class="right">
        <router-link to="/login" class="login">
            <div class="img" v-show="user.img"><img :src="user.img" alt="" srcset="" ></div>
            <div class="name" v-show="user.img">{{user.name}}</div>
            <i class="bi bi-person-circle" v-show="!user.img"></i>
            <h2 v-show="!user.img">未登入&nbsp;&nbsp;&nbsp;</h2>
        </router-link>
        <router-link to="/cart" class="cart">
            <i class="bi bi-cart"></i>
            <p> • </p>
            <p>{{dList.length}}</p>
        </router-link>
    </div>
</nav>
</template>

<script>
import bus from "../utils/bus.ts";
export default {
    name:"nav",
    data(){
        return{
            user:JSON.parse(localStorage.getItem("userInfo")),
            dList:JSON.parse(localStorage.getItem("dList")).list
        }
    },
    methods:{
        init(){
            this.user = JSON.parse(localStorage.getItem("userInfo"))
            this.dList = JSON.parse(localStorage.getItem("dList")).list
        }
    },
    mounted(){
        bus.on("reload",()=>{
            this.init();
        })
    }
}
</script>

<style lang="scss" scoped>
nav{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 6.6rem;
    background: #FFDA58;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    a{
        color: #313131;
        text-decoration: none;
    }
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0% 3%;
        color: #fff;
        h2{
            padding: .5rem 3rem;
            i{
                font-size: 2.25rem;
                color:#313131;
                transition: all .5s;
                &:hover{
                    font-size: 2.5rem;
                }
            }
        }
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 17%;
        .login{
            font-size: 2rem;
            display: flex;
            align-items: center;
            padding: 0% 3%;
            h2{
                font-size: 1rem;
            }
            .img{
                width: 38px;
                height: 38px;
                border-radius: 100%;
                background-color: #313131;
                border: solid 1px #31313109;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                img{
                    max-width: 100%;
                }
            }
            .name{
                margin-left: .75rem;
                font-size: 1rem;
                font-weight: 700;
            }
        }
        .cart{
            margin-left: 1.5rem;
            margin-right: 2rem;
            border-radius: .7rem;
            color: #313131;
            padding: .1rem .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            font-size: 1.9rem;
            p{
                font-size:1.5rem;
                font-weight: 300;
            }
        }
    }
}
</style>