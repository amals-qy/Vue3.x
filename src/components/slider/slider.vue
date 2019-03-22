<template>
    <el-aside>
        <el-scrollbar class="slidBar">
            <el-row class="tac">
                <el-col>

                    <el-menu
                            :default-active="$route.path"
                            class="el-menu-vertical-demo"
                            background-color="#fff"
                            text-color="#666"
                            active-text-color="#666"
                            router>

                        <el-menu-item index="/">
                            <img class="ImgOpen" src="../../assets/image/home.png" />
                            <img class="ImgActive" src="../../assets/image/home_hover.png" />
                            <span slot="title">概况</span>
                        </el-menu-item>

                        <el-menu-item index="/room">
                            <img class="ImgOpen" src="../../assets/image/Room_management.png" />
                            <img class="ImgActive" src="../../assets/image/Room_management_hover.png" />
                            <span slot="title">课程管理</span>
                        </el-menu-item>

                    </el-menu>

                </el-col>
            </el-row>
        </el-scrollbar>
    </el-aside>
</template>

<style scoped lang="scss">
    @import "slider";
</style>