<template>
  <div :class='{"a": a,"b" : b, "c" : c}'>1111111111111111</div>
</template>

<script>
  
  export default {
    data () {
      return {
        a: true,
        b: true,
        c: false,
      }
    }
  }
</script>