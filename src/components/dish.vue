<template>
    <div class="dish">
        <div class="img"><img :src="dish.img" alt=""></div>
        <div class="text">
            <p>{{dish.name}}</p>
            <p>{{dish.price}}元</p>
        </div>
        <div class="add" @click="add">
            AddInCart
        </div>
    </div>
</template>

<script>
export default {
    props:["res","dish"],
    name:"dish",
    methods:{
        add(){
            console.log(this.dish);
        }
    }
}
</script>

<style lang="scss" scoped>
.dish{
    display: flex;
    margin-bottom: 2rem;
    margin-right: 2rem;
    .img{
        width: 18.75rem;
        height: 18.75rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-radius: 0px 50px;
        img{
            cursor: pointer;
            min-height: 100%;
            transition: all .5s;
            &:hover{
                min-height :105%;
            }
        }
    }
    .text{
        text-align:left;
        margin-left:2rem;
        font-size:1.25rem;
        margin-top: 2rem;
    }
    .add{
        align-self: flex-end;
        font-size:1.25rem;
        padding: 1% 2%;
        margin: 2% 0%;
        color: #fff;
        cursor: pointer;
        background: #636363;
    }
}
</style>