<template>
    <h1>Hello Nuxt</h1>
</template>

<script>
    export default {
        name: "",
        created(){
            console.log(process.env.baseUrl);
            console.log(process.env);
        }
    }
</script>

<style scoped>

</style>