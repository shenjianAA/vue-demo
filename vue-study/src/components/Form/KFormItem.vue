<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errMsg" class="error">{{errMsg}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
import emitter from "@/utils/mixins/emitter.js";
export default {
  name: "KFormItem",
  data() {
    return {
      errMsg: ""
    };
  },
  mixins: [emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String
  },
  mounted() {
    if (this.prop) {
      this.dispatch("KForm", "el.add.field", [this]);
    }
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      /**
       *1.拿到校验规则   2、拿到对应的值
       */
      const rules = this.form.rules[this.prop][0];

      const value = this.form.model[this.prop];
      //定义一个descriptor对象， key:要校验的属性  value：对应的规则对象
      let desc = {
        [this.prop]: rules
      };

      let validator = new Schema(desc);
      //返回结果是包含一个boolean值的promise
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMsg = errors[0].message;
        } else {
          this.errMsg = "";
        }
      });
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>