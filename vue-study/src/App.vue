<template>
  <div id="app">
    <Slots></Slots>
    <hr />
    <Communicate></Communicate>
  </div>
</template>

<script>
import Communicate from "@/pages/communicate";
import Slots from "@/pages/slots";

export default {
  name: "App",
  components: {
    Communicate,
    Slots
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
