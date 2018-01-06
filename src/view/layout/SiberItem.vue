<template>
    <el-submenu v-if="!item.hidden && !item.noDropdown" :index="item.name">
        <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children">
            <siber-item v-if="child.children && child.children.length > 0" :item="child"></siber-item>
            <el-menu-item v-else :index="child.indexpath?child.indexpath + item.path + '/' + child.path:item.path + '/' + child.path">
                <i class="el-icon-setting"></i>
                <span slot="title">{{child.name}}</span>
            </el-menu-item>
        </template>
    </el-submenu>
    <el-menu-item :index="item.redirect?item.redirect:item.path + '/' + item.children[0].path" v-else-if="!item.hidden && item.noDropdown  && item.children.length > 0">
        <i class="el-icon-setting"></i>
        <span slot="title">{{item.name}}</span>
    </el-menu-item>
</template>

<script>
export default {
  name: "SiberItem",
  props: ["item"]
};
</script>

<style>

</style>
