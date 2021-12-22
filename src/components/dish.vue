<template>
    <div class="dish" @click="choose">
        {{dish}}
    </div>
</template>

<script>
export default {
    props:["dish"],
    name:"dish",
    methods:{
        choose(){
            console.log(this)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>