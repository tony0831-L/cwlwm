<template>
 <nav-top/>
 <div class="wraper">
     <div class="container" v-show="!editmenu">
        <div class="login">
            <div class="img">
                <img :src="data.img" alt="" v-if="data.img">
                <i class="bi bi-clipboard-plus" v-else></i>
            </div>
            <div class="input">
                <div class="block">餐廳名</div>
                <input type="text" v-model="data.name" placeholder="name">
            </div>
            <div class="input">
                <div class="block">餐廳地址</div>
                <input type="text" v-model="data.add" placeholder="addres">
            </div>
            <div class="input">
                <div class="block">餐廳種類</div>
                <input type="text" v-model="data.cat" placeholder="category">
            </div>
            <div class="input">
                <div class="block">餐廳圖片</div>
                <input type="text" v-model="data.img" placeholder="輸入連結">
            </div>
            <div class="btnGroup">
                <button @click="editmenu=true">
                    下一步 填寫菜單>
                </button>
            </div>
        </div>
    </div>
    <div class="menu" v-show="editmenu">
        <i class="bi bi-plus-square" @click="addingmenu=true"></i>
        <div class="dishes">
            <dish v-for="(i,index) in data.menu" :key="index" :only="true" :dish="i" />
        </div>
         <div class="next">
             <div class="btnGroup">
                 <button @click="editmenu=false">back</button>
                 <button @click="send">submit</button>
             </div>
        </div>
    </div>
 </div>
 <div class="addmenu" v-show="addingmenu">
     <div class="inputGroup">
        <input type="text" placeholder="name" v-model="menuTemp.name">
        <input type="text" placeholder="imgUrl" v-model="menuTemp.img">
        <input type="text" placeholder="price" v-model="menuTemp.price">
        <div class="btnGroup">
            <button @click="addingmenu=false">
                cancel
            </button>
            <button @click="addmenu">
                add
            </button>
        </div>
     </div>
 </div>
 <foot/>
</template>

<script>
import postData from '../utils/postData.js'
import navTop from '../components/navTop.vue'
import foot from '../components/footer.vue'
import dish from '../components/dish.vue'
export default {
  name: 'editRes',
  data(){
      return{
          data:{
            owner:JSON.parse(localStorage.getItem("userInfo")).name,
            name:"",
            add:"",
            img:"",
            cat:"",
            star:4.25,
            menu:[],
          },
          menuTemp:{
            name:"",
            price:"",
            img:"",
          },
          addingmenu:false,
          editmenu:false
      }
  },
    components:{
        navTop:navTop,
        foot:foot,
        dish:dish
    },
  methods:{
      addmenu(){
          this.data.menu.push(this.menuTemp)
          this.menuTemp={name:"",price:"",img:""}
          this.addingmenu=false
      },
      send(){
          postData.editRes({
              id:this.data._id,
              data:this.data,
          }).then(res=>{
              alert(res)
          })
        console.log(this.data)
      }
  },
    mounted(){
        this.data = JSON.parse(this.$route.query.data)
    }
}
</script>
<style lang="scss" scoped>
.wraper{
    .container{
        margin-top: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .login{
            width: 37.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            .img{
                display: flex;
                justify-content: center;
                width: 16.875rem;
                height: 16.875rem;
                border-radius: 100%;
                overflow: hidden;
                align-items: center;
                i{
                    font-size:16rem;
                    color: #C4C4C4;
                }
            }
            input{
                width: 37.8rem;
                height: 4rem;
                text-align: center;
                border-radius:3rem;
            }
            .block{
                position: absolute;
                width: 10rem;
                height: 4rem;
                background: #FFDA58;
                border-top-left-radius: 2rem;
                border-bottom-left-radius: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .btnGroup{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                gap: 2rem;
                button{
                    align-self: flex-end;
                    cursor: pointer;
                    width: 10rem;
                    height: 3.8rem;
                    background: #575757;
                    color: #fff;
                    border-radius:3rem;
                }
            }
        }
    }
    .menu{
        padding: 2% 10%;
        margin-top: 8rem;
        color: #313131;
        font-size: 6rem;
        display: flex;
        &:hover{
            font-size: 6.25rem;
            transition: all .25s;
        }
        .dishes{
            margin: 0% 4%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
        }
    }
}
.addmenu{
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
    .inputGroup{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 3% 2%;
        background: rgba(255, 255, 255, 0.596);
        box-shadow: 0em 0em 0.2em 0.2em rgb(51 51 51 / 20%);
        border-radius: .3rem;
        input{
            background: transparent;
            border: none;
            font-size: 1.25rem;
            color: #333;
            border-radius: .2rem;
            padding: 2% 10%;
            border: solid 1px #333;
            &:focus{
                outline: none;
                background: rgba(255, 255, 255, 0.596);
            }
        }
        .btnGroup{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            button{
                align-self: flex-end;
                cursor: pointer;
                width: 5rem;
                height: 2rem;
                background: #575757;
                color: #fff;
            }
        }
    }
}
.next{
    position: absolute;
    right: 4rem;
    bottom: 6rem;
    .btnGroup{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
            button{
                align-self: flex-end;
                cursor: pointer;
                width: 10rem;
                height: 3.8rem;
                background: #575757;
                color: #fff;
                border-radius:3rem
            }
    }

}
</style>
