<template>
 <nav-top/>
    <div class="myress">
        <div class="info">
            <div class="title">
                您好{{name}}, 您共有{{list.length}}間餐廳
            </div>
        </div>
        <hr/>
        <div class="list">
            <myres v-for="(i,index) in list" :key="index" :res="i"/>
            <router-link to="/addRes"><i class="bi bi-plus-circle plus"></i></router-link>
        </div>
    </div>
 <foot/>
</template>

<script>
import getInfo from '../utils/getInfo'
import navTop from '../components/navTop.vue'
import foot from '../components/footer.vue'
import myres from '../components/myRes.vue'
export default {
    name:"myRes",
    components:{
        navTop:navTop,
        foot:foot,
        myres:myres,
    },
    data(){
        return{
            name:"",
            list:[]
        }
    },
    mounted(){
        this.name = JSON.parse(localStorage.getItem("userInfo")).name
        getInfo.getResByName(this.name).then(res=>{
            this.list = res.data.data
        })
    }
}
</script>

<style lang="scss" scoped>
    .myress{
        padding: 5rem;
        padding-top:6.6rem;
        hr{
            color: #333;
            margin: auto;
            width: 60%;
            margin-bottom: 3rem;
            box-shadow: 0em 1px .1em 0em rgb(51 51 51 / 20%);
        }
        .info{
            margin-left: 30rem;
            padding: 2rem 0%;
            text-align: left;
            .title{
                font-size: 2rem;
                color: #333;
            }
        }
        .list{
            width: 60%;
            padding: 2%;
            height: 40rem;
            overflow-y: scroll;
            margin: auto;
            .plus{
                color: #313131;
                font-size: 3.5rem;
                cursor: pointer;
                &:hover{
                    transition: all .25s;
                    font-size: 3.75rem;
                }
            }
        }
    }
</style>