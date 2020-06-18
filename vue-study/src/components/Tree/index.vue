<template>
  <div>
    <li>
      <div @toggle="toggle">
        {{model.title}}
        <span v-if="isFolder">[{{open ? '-' : '+' }}]</span>
      </div>
    </li>
    <ul v-show="open" v-if="isFolder">
      <item class="item" v-for="model in model.children" :model="model" :key="model.title"></item>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>