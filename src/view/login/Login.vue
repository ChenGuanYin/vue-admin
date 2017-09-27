<template>
<div class="login">
 <main>
        <h1>系统登录</h1>
 </main>
</div>
</template>
<script>
    export default {
        name: "login",
    }
</script>
<style lang="scss" rel="stylesheet/scss" scope>
    .login{
        width:  100%;
        height: 100%;
        color: #fff;
        background: linear-gradient(#2d3a4b,#2d3a5b);
        display: flex;
        justify-content: center;
        align-items: center;
        main {
            height: 400px;
            width: 400px;
            h1{
                text-align: center;
                font-weight: 500;
            }
        }
    }
</style>
