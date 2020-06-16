<template>
  <div>
    <ParentToChild></ParentToChild>
    <hr />
    <ChildToParent></ChildToParent>
    <hr />
    <AncestorToChild></AncestorToChild>
    <hr />
    <BrotherToBrohter></BrotherToBrohter>
  </div>
</template>

<script>
import ParentToChild from "@/pages/communicate/ParentToChild/Index";
import ChildToParent from "@/pages/communicate/ChildToParent/Index";
import AncestorToChild from "@/pages/communicate/AncestorToChild";
import BrotherToBrohter from "@/pages/communicate/BrotherToBrother";
export default {
  components: {
    ParentToChild,
    ChildToParent,
    AncestorToChild,
    BrotherToBrohter
  }
};
</script>

<style lang="scss" scoped>
</style>