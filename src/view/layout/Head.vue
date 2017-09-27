<template>
  <div class="header">
      <Button type="dashed">按钮</Button>
  </div>
</template>

<script>
import Waves from "@/directive/waves"
    export default {
        data () {
            return {
                msg: "holle vue-cli"
            }
        },
        directives:{
            Waves
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .ivu-btn{
        margin: 50px 0 0 50px;
    }
</style>
