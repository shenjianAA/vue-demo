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
  methods: {
    validate(cb) {
      //校验表单内容
      let res = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(res)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>