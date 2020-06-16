<template>
  <div>子代接收祖先传过来的值: {{foo}}</div>
</template>

<script>
export default {
  name: "Child",
  inject: ["foo"]
};
</script>

<style lang="scss" scoped>
</style>