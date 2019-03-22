<template>
    <el-container>
        <head_nav/>
        <el-container>
            <slider/>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import slider from '../components/slider/slider.vue'
    import head_nav from '../components/head_nav/head_nav.vue'

    export default {
        components: {slider, head_nav}
    }
</script>