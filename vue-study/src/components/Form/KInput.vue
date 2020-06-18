<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from "@/utils/mixins/emitter.js";
export default {
  inheritAttrs: false, //阻止父级继承对应的属性
  name: "KInput",
  mixins: [emitter],
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
      //使用$parent来触发事件 不够健壮
      //this.$parent.$emit("validate");
      this.dispatch("KFormItem", "validate");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>