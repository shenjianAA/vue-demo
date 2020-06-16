<template>
  <div>
    <h2>子向父传值</h2>
    <h3>事件触发$emit/$on</h3>
    <button @click="fn">向父组件传值</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  methods: {
    fn() {
      this.$emit("msg", "msg from child to Parent.......");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>