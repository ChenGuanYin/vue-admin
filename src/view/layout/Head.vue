<template>
    <header class="header">
        <hamburger class="hamburger-container" @toggleClick="toggleClick" :isActive="collapse"></hamburger>
        <screenfull class="screenfull"></screenfull>
    </header>
</template>

<script>
import Hamburger from "@/components/hamburger/";
import Screenfull from "@/components/screenfull/";
export default {
    props: ["collapse"],
    data() {
        return {
            msg: "holle vue-cli"
        }
    },
    components: {
        Hamburger, Screenfull
    },
    methods: {
        toggleClick() {
            this.$store.dispatch("SIBER_TOGGIE")
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.header {
    height: 50px;
    width: 100%;
    line-height: 50px;
    background: #eef1f6;
    padding: 0 15px;
    .hamburger-container {
        display: inline-block;
        height: 50px;
        line-height: 63px;
    }
    .screenfull {
        position: absolute;
        right: 100px;
        top: 0;
        line-height: 63px;
    }
}
</style>
