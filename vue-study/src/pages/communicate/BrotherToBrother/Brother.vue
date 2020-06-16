<template>
  <div>
    <h4>Brother组件</h4>
    Brother2传递过来的值：{{msg}}
    <br />
    <button @click="$parent.$emit('br', 'msg from brother1 to brother2')">向br2传递值</button>
  </div>
</template>

<script>
export default {
  name: "Brother",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$parent.$on("br2", e => {
      console.log(e);
      this.msg = e;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>