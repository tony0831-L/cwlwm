<template>
    <navTop/>
    <div class="info">
        <div class="img">
            <img :src="data.img" alt="">
            <h1>{{data.name}}</h1>
        </div>
        <div class="des">

        </div>
    </div>
</template>

<script>
import navTop from "../components/navTop.vue"
export default {
    components:{
        navTop: navTop
    },
    data(){
        return{
            data:JSON.parse(localStorage.getItem("choose"))
        }
    },
}
</script>

<style lang="scss" scoped>
    .info {
        margin-top: 5rem;
        width:100%;
        .img{
            width:100%;
            height: 21rem;
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
    }
</style>