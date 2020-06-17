# 规则

## Form 管理数据类型-model 校验规则-rules 全局校验方法-validate

## FormItem 显示标签-label 执行校验-prop 显示校验结果

## Input 绑定数据模型 v-model 通知FormItem校验

### 实现双向绑定

```js
<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>
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
    }
  }
};
```

### 通知FormItem校验

```js
console.log(xxx);
```
