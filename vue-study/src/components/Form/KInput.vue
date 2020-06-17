<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, //阻止父级继承对应的属性
  name: "KInput",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      //通知FormItem组件进行校验
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>