<template>
    <el-header>
        <div class="header-right">
            <el-dropdown>
                <div class="user">
                    <span class="el-dropdown-link">
                        <span class="log_use">Amals</span>
                        <i class="el-icon-caret-bottom"></i>
                        <span class="Administrator">
                            <img src="../../assets/image/Head_portrait.png" alt="用户"/>
                        </span>
                    </span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="outRoom">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
</template>

<style scoped lang="scss">
    @import "head_nav";
</style>