<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KForm",
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fileds: []
    };
  },
  methods: {
    validate(cb) {
      //校验表单内容
      //如果存在层级嵌套，会导致$children获取的值不准确
      // let res = this.$children
      //   .filter(item => item.prop)
      //   .map(item => item.validate());
      let res = this.fileds.map(item => item.validate());
      Promise.all(res)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  },
  created() {
    this.$on("el.add.field", filed => {
      this.fileds.push(filed);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>