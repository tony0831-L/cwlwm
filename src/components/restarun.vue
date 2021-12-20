<template>
  <div class="res">
    <div class="img">
        <img :src="res.img" alt="">
    </div>
    <div class="name">
        <h1>{{res.name}}</h1>
    </div>
    <div class="type">
        <h1>{{res.cat}}</h1>
    </div>
    <div class="time">
        <i class="bi bi-clock"></i>
        &nbsp;
        <h1>15min</h1>
    </div>
  </div>
</template>

<script>
export default {
    props:["res"],
    name:"restarun",
}
</script>

<style lang="scss" scoped>
    h1{
        font-weight: 500;
    }
    .res{
        width: 24.31rem;
        height: 17rem;
        margin: 1rem 2.75rem;
        border-radius: 0px 50px;
        display: flex;
        justify-content: center;
        background: #E0E0E0;
        align-items: center;
        position: relative;
        box-shadow: .07rem .07rem 16px 0 rgb(0 0 0 / .7);
        cursor: pointer;
        .img{
            border-radius: 0px 50px;
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                min-width: 150%;
                opacity: .9;
                cursor: pointer;
                transition: all .5s;
                &:hover{ 
                    min-width: 155%;   
                }
            }
        }
        .name,.type{
            position: absolute;
            top:13px;
            left: -16px;
            background: #424242;
            padding: .2rem .5rem;
            h1{
                font-size: 1.25rem;
                color: #fff;
            }
        }
        .type{
            top:53px;
            background: #CC7070;
        }
        .time{
            position: absolute;
            background: #89CE98;
            bottom: 10px;
            right: -20px;
            padding: .3rem .5rem;
            display: flex;
            align-items: center;
            color: #fff;
            h1{
                font-size: 1.25rem;
            }
        }
    }
</style>