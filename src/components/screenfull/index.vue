<template>
    <div>
        <svg @click="screenFull" class="icon" :width="width" :height="height" :fill="fill" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M905.75 343.25l-72.235-72.234-185.065 185.064-80.585-80.558 185.12-185.037-72.233-72.233c0-31.091 25.159-56.251 56.25-56.251h168.75c31.035 0 56.25 25.16 56.25 56.251v168.749c-0.001 31.036-25.216 56.25-56.251 56.25v0zM343.25 905.751c0 31.033-25.214 56.249-56.251 56.249h-168.749c-31.092 0-56.25-25.215-56.25-56.249v-168.75c0-31.090 25.158-56.252 56.25-56.252l72.233 72.234 185.067-185.064 80.529 80.528-185.065 185.066 72.234 72.237zM905.75 962h-168.75c-31.091 0-56.25-25.215-56.25-56.249l72.233-72.237-185.119-185.066 80.585-80.528 185.065 185.064 72.235-72.234c31.035 0 56.25 25.162 56.25 56.252v168.75c0 31.033-25.215 56.249-56.25 56.249v0zM375.551 456.079l-185.067-185.064-72.233 72.234c-31.092 0-56.25-25.214-56.25-56.25v-168.749c0-31.091 25.158-56.251 56.25-56.251h168.749c31.037 0 56.251 25.16 56.251 56.251l-72.234 72.233 185.065 185.037-80.528 80.558z" />
        </svg>
    </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  props: {
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    },
    fill: {
      type: String,
      default: "#48576a"
    }
  },
  methods: {
    screenFull() {
      if (!screenfull.enabled) {
        this.$message.warning("you browser can not work");
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style scope>
.icon {
  cursor: pointer;
}
</style>
