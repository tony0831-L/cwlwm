<template>
    <navTop/>
    <div class="info">
        <div class="img">
            <img :src="data.img" alt="">
            <h1>{{data.name}}</h1>
        </div>
        <div class="des">
            <p><i class="bi bi-geo-alt-fill"></i>地址: {{data.add}}</p>
            <p><i class="bi bi-star-fill"></i>顧客評價: {{data.star}}</p>
        </div>
        <div class="menu">
            <h2>menu</h2>
            <dish v-for="(i,index) in data.menu" :key="index" :dish="i"/>
        </div>
    </div>
</template>

<script>
import navTop from "../components/navTop.vue"
import dish from "../components/dish.vue"
export default {
    components:{
        navTop: navTop,
        dish: dish
    },
    data(){
        return{
            data:JSON.parse(localStorage.getItem("choose"))
        }
    },
    mounted(){
        if(!JSON.parse(localStorage.getItem("userInfo")).name){
            this.$router.replace('/login')
            alert("請登入後再使用本服務")
        }
    }
}
</script>

<style lang="scss" scoped>
    .info {
        position: absolute;
        top: 12%;
        width:100%;
        .img{
            width:100%;
            height: 19rem;
            display: flex;
            overflow-y: hidden;
            position: relative;
            justify-content: center;
            align-items: center;
            background-color:#333;
            img{
                position: absolute;
                min-width: 100%;
                opacity: .5;
            }
            h1{
                position: absolute;
                color: #fff;
                font-size:3rem;
                font-weight: 500;
            }
        }
        .des{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25rem;
            p{
                margin: 1% 4%;
            }
        }
    }
</style>