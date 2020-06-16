<template>
  <div>
    <h2>父向子传值</h2>
    <h3>props传值</h3>
    <Child :msg="msg"></Child>
    <hr />
    <h3>$refs传值</h3>
    <Child2 ref="ch2"></Child2>
    <hr />
    <h3>$children传值</h3>
    <Child3></Child3>
  </div>
</template>

<script>
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default {
  name: "Parent",
  data() {
    return {
      msg: "msg from parent to child....."
    };
  },
  components: {
    Child,
    Child2,
    Child3
  },
  mounted() {
    this.$refs.ch2.msg = "msg from parent to child2.....";
    this.$children[2].msg = "msg from parent to child3.....";
  }
};
</script>

<style lang="scss" scoped>
</style>