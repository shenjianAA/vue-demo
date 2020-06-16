<template>
  <div>
    <h2>兄弟元素之间传值</h2>
    <h3>通过共同的祖先派发事件$parent.$emit/$parent.$on</h3>
    <Brother></Brother>
    <hr />
    <Brother2></Brother2>
  </div>
</template>

<script>
import Brother from "./Brother";
import Brother2 from "./Brother2";
export default {
  name: "BrotherToBrother",
  data() {
    return {};
  },
  components: {
    Brother2,
    Brother
  }
};
</script>

<style lang="scss" scoped>
</style>