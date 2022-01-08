<template>
    <div class="order">
        <div class="img">
            <img :src="data.img" alt="">
        </div>
        <div class="info">
            <p>{{data.name}}</p>
            <p>{{data.price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["data"],
    name:"order",
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.order{
    .img{
        width: 12rem;
        height: 14rem;
        background: #E0E0E0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        img{
            max-height: 100%;
            opacity: .9;
        }
    }
    .info{
        padding: 1rem 0%;
        font-size: 1.2rem;
        text-align: left;
    }
}
</style>