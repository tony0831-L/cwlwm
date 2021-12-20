<template>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">login</router-link>
</nav>
</template>

<script>
export default {
    name:"nav"
}
</script>

<style lang="scss" scoped>
nav{
    position: fixed;
    width: 100%;
    height: 14%;
    top: 0px;
    background: #FFDA58;
    a{
        color: #313131;
        text-decoration: none;
    }
}
</style>