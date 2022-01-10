<template>
  <div class="res" @click="choose">
      <div class="left">
        <div class="img"><img :src="res.img" alt=""></div>
        <div class="info">
            <div class="name">{{res.name}}</div>
            <div class="cat"><i class="bi bi-tag-fill"></i>{{res.cat}}</div>
            <div class="star"><i class="bi bi-star-fill"></i>大眾評分: ({{res.star}}/5)分</div>
        </div>
      </div>
      <div class="right">
          <i class="bi bi-pen" @click="edit"></i>
          <i class="bi bi-trash" @click="del()"></i>
      </div>
  </div>
</template>

<script>
import del from '../utils/del.js'
export default {
    props:["res"],
    name:"restarun",
    methods:{
        choose(){
        },
        edit(){
            this.$router.push ({ path: '/editRes', query: {data:JSON.stringify(this.res)}})
        },
        del(){
            del.delRes(this.res._id).then(res=>{
                if(res.data){
                    alert("刪除成功")
                    this.$router.push("/")   
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .res{
        padding: 1%;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        color:#333;
        box-shadow: 0em 0em 0.2em 0.2em rgb(51 51 51 / 20%);
        .left{
            display: flex;
            gap:1.5rem;
            .img{
                width: 10rem;
                height: 10rem;
                overflow: hidden;
                display: flex;
                justify-content: center;
                border-radius: 100%;
                img{
                    min-height: 100%;
                }
            }
            .info{
                display: flex;
                gap: .8rem;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 1.25rem;
                .name{
                    font-size: 1.3rem;
                    font-weight: 600;
                }
                .cat{
                    i{
                        color: #CC7070;
                    }
                }
                .star{
                    i{
                        color: rgb(39, 111, 191);
                    }
                }
            }
        }
        .right{
            display: flex;
            align-items: center;
            gap:1rem;
            font-size: 2rem;
            i{
                cursor: pointer;
                &:hover{
                    transition: all .5s;
                    font-size: 2.25rem;
                }
            }
        }
    }
</style>