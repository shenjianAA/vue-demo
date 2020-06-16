<template>
  <div>父组件传的值： {{msg}}</div>
</template>

<script>
export default {
  name: "Child3",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>