<template>
    <div>
        <template v-for="item in router">
            <el-submenu v-if="!item.hidden && !item.noDropdown" :index="item.name">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <template v-for="child in item.children">
                    <siber-item v-if="child.children && child.children.length > 0" :router="[child]"></siber-item>
                    <router-link v-else  :to="item.path + '/' + child.path">
                        <el-menu-item :index="item.path + '/' + child.path">
                            <i class="el-icon-setting"></i>
                            <span slot="title">{{child.name}}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
            <router-link :to="item.path + '/' + item.children[0].path" v-if="!item.hidden && item.noDropdown  && item.children.length > 0">
                <el-menu-item :index="item.path + '/' + item.children[0].path">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name: "SiberItem",
    props: ["router"],
    created() {
        console.log(this.router)
    }
}

</script>

<style>

</style>
