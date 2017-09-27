<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
}
</script>

<style lang="scss">
  @import "~normalize.css/normalize.css";
  @import "./style/common.scss";
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>
