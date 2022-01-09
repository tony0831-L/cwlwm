<template>
  <footer>
      <h2>© 2021 偉倫外賣</h2>
  </footer>
</template>

<script>
export default {
    name:"footer",
}
</script>

<style lang="scss" scoped>
@import url('../sass/anime.scss');
footer{
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:3.5rem;
    background: #B6B6B6;
    animation-name: fadein;
    animation-duration: .5s;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
        color: 333;
    }
}
</style>