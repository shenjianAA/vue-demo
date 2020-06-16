<template>
  <div>接收父组件的值： {{msg}}</div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>