<template>
<nav>
    <router-link to="/" class="home">
        <h2>Home</h2>
    </router-link> 
    <div class="right">
        <router-link to="/login" class="login">
            <h2 v-show="!user.img">請登入後使用本服務&nbsp;&nbsp;&nbsp;</h2>
            <div class="img" v-show="user.img"><img :src="user.img" alt="" srcset="" ></div>
            <div class="name" v-show="user.img">{{user.name}}</div>
            <i class="bi bi-person-circle" v-show="!user.img"></i>
        </router-link>
        <router-link to="/cart" class="cart">
            <i class="bi bi-cart"></i>
        </router-link>
    </div>
</nav>
</template>

<script>
export default {
    name:"nav",
    data(){
        return{
            user:JSON.parse(localStorage.getItem("userInfo"))
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
nav{
    position: fixed;
    width: 100%;
    height: 12%;
    top: 0px;
    background: #FFDA58;
    display: flex;
    justify-content: space-between;
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
            background: #575757;
            font-size: 1.25rem;
            font-weight: 400;
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
                width: 50px;
                height: 50px;
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
        }
        .cart{
            margin-left: 1.5rem;
            margin-right: 2rem;
            border-radius: 100%;
            color: #313131;
            width: 38px;
            height: 38px;
            padding: 2px 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            font-size: 1.5rem;
        }
    }
}
</style>