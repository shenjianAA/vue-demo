<template>
  <div>
    <h4>Brother2组件</h4>
    Brother传递过来的值：{{msg}}
    <br />
    <button @click="$parent.$emit('br2', 'msg from brother2 to brother1')">向br1传递值</button>
  </div>
</template>

<script>
export default {
  name: "Brother2",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$parent.$on("br", e => {
      console.log(e);
      this.msg = e;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>