<template>
  <div>
    <h2>作用域插槽</h2>
    <slot :user="user">xxxxxxxxx</slot>
    <slot name="header" msg="msg from child"></slot>
  </div>
</template>

<script>
export default {
  name: "ScopeSlot",
  data() {
    return {
      user: {
        firstName: "child"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>