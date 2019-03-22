<template>
    <div class="Am-main"  v-loading="loading">

        <span> 概况: {{ new Date() }} </span>

        <br/>

        <editor v-model="content" placeholder="请输入简介..." height="200" :state.sync="loading" />

        <br/>

        <div v-html="content"></div>

    </div>
</template>

<style scoped lang="scss">
    @import "Home";
</style>

<script>
    import Home from './Home'
    export default Home
</script>