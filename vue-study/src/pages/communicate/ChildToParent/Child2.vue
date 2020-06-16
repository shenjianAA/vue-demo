<template>
  <div>
    <h3>$parent传值</h3>
  </div>
</template>

<script>
export default {
  name: "Child2",
  mounted() {
    this.$parent.msg2 = "msg from child2 to Parent";
  }
};
</script>

<style lang="scss" scoped>
</style>