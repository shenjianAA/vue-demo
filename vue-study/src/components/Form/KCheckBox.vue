<template>
  <div>
    <span v-if="label">{{label}}</span>
    <input type="checkbox" :checked="checked" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: "KCheckBox",
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: String
  },
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    onChange(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>