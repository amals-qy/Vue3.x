<template>
    <div class="login">
        <div class="land_module">
            <div class="title_top">
                登录
            </div>
            <div class="phe login_dl">
                <span>账号</span>
                <input v-model="phe" type="text" placeholder="请输入账号" />
            </div>
            <div class="pwd login_dl">
                <span>密码</span>
                <input v-model="pwd" type="password" v-on:keyup.13="signIn" placeholder="请输入密码" />
            </div>
            <div class="title_err" v-if="err">
                <img src="../../assets/image/err.png" />
                {{ errormsg }}
            </div>
            <button class="signIn" @click="signIn">登录</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "signIn";
</style>

<script>
    import signIn from './signIn'
    export default signIn
</script>