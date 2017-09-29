<template>
  <div class="siber">
    <el-menu :default-active="$route.path" unique-opened router theme="dark" :collapse="collapse">
      <siber-item :item="item" :key="item.path" v-for="item in router"></siber-item>
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