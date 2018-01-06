<template>
    <header class="header">
        <hamburger class="hamburger-container" @toggleClick="toggleClick" :isActive="collapse"></hamburger>
        <header-crumb class="header-crumb"></header-crumb>
        <!-- <screenfull class="screenfull"></screenfull> -->
    </header>
</template>

<script>
import Hamburger from "@/components/hamburger/";
import Screenfull from "@/components/screenfull/";
import HeaderCrumb from "./HeaderCrumb";
export default {
  props: ["collapse"],
  data() {
    return {
      msg: "holle vue-cli"
    };
  },
  components: {
    Hamburger,
    Screenfull,
    HeaderCrumb
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("SIBER_TOGGIE");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  background: #eef1f6;
  padding: 0 15px 0 55px;
  position: relative;
  .hamburger-container {
    position: absolute;
    left: 15px;
    top: 0;
    height: 50px;
    line-height: 63px;
  }
  .screenfull {
    position: absolute;
    right: 100px;
    top: 0;
    line-height: 63px;
  }
  .header-crumb {
    display: inline-block;
  }
}
</style>
