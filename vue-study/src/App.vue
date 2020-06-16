<template>
  <div id="app">
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
  name: "App",
  components: {
    ParentToChild,
    ChildToParent,
    AncestorToChild,
    BrotherToBrohter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
