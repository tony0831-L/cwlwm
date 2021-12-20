<template>
  <div class="search">
      <input type="text" placeholder="您好, 請問今晚想來點什麼?">
      <div class="filter">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .search{
        display: flex;
        width: 100%;
        input{
            margin-left: 7.3%;
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
            border-radius: 45px;
        }
    }
</style>