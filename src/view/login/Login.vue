<template>
<div class="login">
    <vue-particles color="#dedede" :particlesNumber="150" shapeType="edge"></vue-particles>
    <main>
        <h3>登录</h3>    
        <el-form>
            <el-form-item>
                <i class="iconfont icon-zhanghu"></i>
                <el-input placeholder="账号" v-model="userName"></el-input>
            </el-form-item>
            <el-form-item>
                <i class="iconfont icon-mima"></i>
                <el-input type="password" placeholder="密码" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="clearbox">
                    <el-checkbox v-model="remember">记住它</el-checkbox>
                    <el-button type="text" class="fr">忘记密码</el-button>
                </div>
                <el-button class="login-button" type="primary" @click="goLogin">登录</el-button>
                <div><el-button type="text">现在就去注册</el-button></div>
            </el-form-item>
        </el-form>
    </main>    
</div>
</template>
<script>
    export default {
        name: "login",
        data () {
            return {
                password: null,
                userName: null,
                remember: true,
            }
        },
        methods:{
            goLogin(){
                this.$router.push("/")
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .login{
        background-image: url("../../../static/img/sky.jpg");
        background-size: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        &>div{
            width: 100%;
            height: 100%;
        }
        main{
            width: 320px;
            height: 340px;
            padding: 36px;
            position: absolute;
            left: calc(50% - 160px);
            top: calc(50% - 170px);
            border-radius: 10px;
            background-color: rgba(255,255,255,0.9);
            box-shadow: 0 0 100px rgba(255, 255, 255, 0.5);
            h3{
                text-align: center;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                margin-bottom: 10px;
                font-weight: 500;
            }
            .login-button{
                width: 100%
            }
            .iconfont{
                position: absolute;
                left: 10px;
                top: 0;
                z-index: 2;
            }
            .el-input__inner{
                padding-left: 30px;
            }
        }
    }
</style>
