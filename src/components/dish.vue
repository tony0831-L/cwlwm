<template>
    <div class="dish">
        <div class="img"><img :src="dish.img" alt=""></div>
        <div class="text">
            <p>{{dish.name}}</p>
            <p>{{dish.price}}元</p>
        </div>
        <div class="add" @click="add">
            <!-- AddInCart -->
            <div class="test">
                +&nbsp;<i class="bi bi-cart"></i>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../utils/bus.ts";
export default {
    props:["res","dish"],
    name:"dish",
    methods:{
        add(){
            let dList = JSON.parse(localStorage.getItem("dList")).list;
            if (JSON.parse(localStorage.getItem("dList")).name!==""&&this.res!==JSON.parse(localStorage.getItem("dList")).name) {
                alert("不同餐廳")
            } else {
                dList.push(this.dish);
                localStorage.setItem("dList",JSON.stringify({
                    name:this.res,
                    list:dList
                }));
                bus.emit("reload");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.dish{
    display: flex;
    margin: 0rem 2rem;
    margin-bottom: 3rem;
    .img{
        width: 18.75rem;
        height: 18.75rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-radius: 0px 50px;
        background: #E0E0E0;
        cursor: pointer;
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
        font-size:1.2rem;
        margin-top: 2rem;
    }
    .add{
        align-self: flex-end;
        font-size:1.25rem;
        margin: 2% 0%;
        color: #fff;
        cursor: pointer;
        background: #636363;
        .test{
            padding: .5rem 1rem;
            font-size:1.5rem;
            display: flex;
        }
    }
}
</style>