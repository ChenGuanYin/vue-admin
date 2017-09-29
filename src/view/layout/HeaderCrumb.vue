<<template>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
</template>
<<script>
export default {
    data () {
        return {
            crumbs: []
        }
    },
    methods:{
        init(){
            console.log(this.$route.matched)
        }
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="sass" scoped>

</style>
