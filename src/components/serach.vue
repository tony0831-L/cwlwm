<template>
  <div class="search">
       <input type="text" :placeholder="msg">
      <div class="filter">
          搜尋
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:JSON.parse(localStorage.getItem("userInfo")).name?"您好"+JSON.parse(localStorage.getItem("userInfo")).name+", 請問今晚想來點什麼?":"您好, 請問今晚想來點什麼?"
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('../sass/anime.scss');
    .search{
        display: flex;
        width: 100%;
        animation-name: flyinTop;
        animation-duration: 1.5s;
        input{
            margin-left: 6%;
            width: 54rem;
            height: 2.19rem;
            border: 2px solid #B8B8B8;
            border-radius: 45px;
            margin-right: 49px;
            padding: 0% .8%;
        }
        .filter{
            width: 9.5rem;
            height: 2.19rem;
            background: #6A6A6A;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 45px;
        }
    }
</style>