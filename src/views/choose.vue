<template>
    <div class="info">
        <div class="img">
            <img :src="data.img" alt="">
            <h1>{{data.name}}</h1>
        </div>
        <div class="des">
            <p><i class="bi bi-geo-alt-fill loc"></i>地址: {{data.add}}</p>
            <p><i class="bi bi-star-fill star"></i>顧客評價: {{data.star}}</p>
        </div>
        <div class="menu">
            <h2>Menu:</h2>
            <div class="dishes">
                <dish v-for="(i,index) in data.menu" :key="index" :dish="i" :res="data.name"/>
            </div>
        </div>
    </div>
    <navTop/>
    <foot/>
</template>

<script>
import navTop from "../components/navTop.vue"
import dish from "../components/dish.vue"
import foot from '../components/footer.vue'
export default {
    components:{
        navTop: navTop,
        dish: dish,
        foot:foot,
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
@import url('../sass/anime.scss');
    .info {
        padding-top:6.6rem;
        padding-bottom: 4.1%;
        width:100%;
        .img{
            width:100%;
            height: 19rem;
            display: flex;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            background-color:#333;
            img{
                animation-name: fadein;
                animation-duration: 1.5s;
                min-width: 100%;
                opacity: .5;
            }
            h1{
                position: absolute;
                color: #fff;
                font-size:3rem;
                font-weight: 500;
                text-shadow: 0.1em 0.1em 0.5em #000;
            }
        }
        .des{
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25rem;
            p{
                margin: 1% 4%;
            }
            .loc{
                color: #EA7838;;
            }
            .star{
                color: #276fbf;
            }
        }
        .menu{
            text-align: left;
            padding: 0% 5rem;
            h2{
                animation-name: fadein;
                animation-duration: 1.5s;
                font-weight: 500;
                font-size: 1.4rem;
                margin-bottom: 2rem;
            }
            .dishes{
                margin-left: 15rem;
                animation-name: flyinleft;
                animation-duration: 1.5s;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5rem;
                justify-items: start
            }
        }
    }
</style>