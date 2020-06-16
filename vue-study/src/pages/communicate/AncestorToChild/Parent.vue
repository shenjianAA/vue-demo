<template>
  <div>
    父代接收祖先传过来的值： {{foo}}
    <br />
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "Parent",
  inject: ["foo"],
  components: {
    Child
  }
};
</script>

<style lang="scss" scoped>
</style>