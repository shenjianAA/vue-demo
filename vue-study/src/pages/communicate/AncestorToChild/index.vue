<template>
  <div>
    <h2>祖先给后代传值</h2>
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from "./Parent";
export default {
  name: "AncestorToChild",
  provide() {
    return {
      foo: this.foo
    };
  },
  data() {
    return {
      foo: "msg from Ancestor"
    };
  },
  components: {
    Parent
  }
};
</script>

<style lang="scss" scoped>
</style>