<template>
  <div>
    <DefaultSlot>ccccccccccccccccc</DefaultSlot>
    <hr />
    <NamedSlot>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </NamedSlot>
    <hr />
    <ScopeSlot>
      <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
      <template v-slot:header="props1">
        <div>{{props1.msg}}</div>
      </template>
    </ScopeSlot>
  </div>
</template>

<script>
import DefaultSlot from "./DefaultSlot";
import NamedSlot from "./NamedSlot";
import ScopeSlot from "./ScopeSlot";
export default {
  name: "Index",
  data() {
    return {
      msg: "parent",
      user: {
        firstName: "parent"
      }
    };
  },
  components: {
    DefaultSlot,
    NamedSlot,
    ScopeSlot
  }
};
</script>

<style lang="scss" scoped>
</style>