<template>
  <div class="siber">
    <el-menu :default-active="$route.path" unique-opened theme="dark" :collapse="collapse">
      <siber-item :router="router"></siber-item>
    </el-menu>
  </div>
</template>

<script>
import SiberItem from "./SiberItem"
export default {
  props: ["collapse"],
  components:{SiberItem},
  computed:{
    router(){
      return this.$router.options.routes
    }
  }
}
</script>