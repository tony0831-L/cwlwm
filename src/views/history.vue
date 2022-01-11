<template>
    <nav-top/>
    <div class = "history">
        <div class = "title">
            <h2>歷史訂單：</h2>
            <div class = "list1">
                <list v-for="(i, index) in list" :key = 'index' @click="choise(i)">
                    <img :src="i.list[0].img" alt="">
                    <div class="info">
                        <div class = "res">
                            {{ i.res }}
                        </div>
                        <div class = "time">
                            {{ i.time }}
                        </div>
                        <div class="dishlist">
                            <p>
                                {{i.list.length}}項餐點: 
                            </p>
                            <ul>
                                <li v-for="(y,index) in i.list" :key="index" v-show="index<2">{{index+1}}.{{y.name}}</li>
                                <li>剩餘{{i.list.length-2}}項....</li>
                            </ul>
                        </div>
                    </div>
                    <div class="comment">
                        評論:&nbsp; {{i.comment}}
                    </div>
                </list>
            </div>
        </div>
    </div>
</template>

<script>
import navTop from '../components/navTop.vue'
import getInfo from '../utils/getInfo.js'
export default {
    name: 'history',
    components: {
        navTop: navTop,
    },
    data() {
        return {
            name:JSON.parse(localStorage.getItem("userInfo")).name,
            list: []
        }    
    },
    mounted() {
       getInfo.getUserHis(this.name).then(res=>{this.list = res.data.data})
    }
}
</script>

<style lang="scss" scoped>
@import url('../sass/anime.scss');
 .history {
    padding-top: 9rem;
    animation-name: flyinTop;
    animation-duration: 1.5s;
     .title {
         text-align: left;
         padding: 0% 4.2%;
         h2{
             font-size: 2rem;
         }
         .list1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            list {
                width: 70%;
                display: grid;
                cursor: pointer;
                box-shadow: 0em 0em 0.2em 0.2em rgb(51 51 51 / 20%);
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center;
                justify-items:start;
                gap: 75px;
                margin-top: 25px;
                margin-bottom: 50px;
                &:hover{
                    transition: all .25s;
                    width: 70.5%;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    margin-left: -2rem;
                }
                .comment{
                    font-size: 1.25rem;
                }
                img {
                    width: 164px;
                    height: 154px;
                    margin: 1rem;
                    margin-left: 140px;
                    border-radius: 100%;
                    border: solid 1px;
                    background: #C4C4C4;
                    overflow: hidden;
                }
                .res {
                    font-size: 24px;
                    line-height: 28px;
                }
                .time {
                    font-size: 16px;
                    line-height: 28px;
                }
                .dishlist{
                    ul{
                        display: flex;
                        flex-direction: column;
                        li{
                            list-style-type: none;
                        }
                    }
                }
            }
         }
     }
 }
</style>
