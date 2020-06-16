<template>
  <div>
    <Child @msg="onMsg($event)"></Child>
    子组件传的值： {{msg}}
    <hr />
    <Child2></Child2>
    子组件传的值： {{msg2}}
  </div>
</template>

<script>
import Child from "./Child";
import Child2 from "./Child2";
export default {
  name: "Parent",
  components: {
    Child,
    Child2
  },
  data() {
    return {
      msg: "",
      msg2: ""
    };
  },
  methods: {
    onMsg(e) {
      this.msg = e;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>