<template>
  <div>
    <h2>匿名插槽</h2>下面部分显示的是匿名的内容
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DefaultSlot",
  data() {
    return {
      msg: "child"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>