<template>
  <div>
    <br />
    <h1>我就是一个组件</h1>
    <p>撒子功能都没有{{ notice }}</p>
    <br />
  </div>
</template>
<script lang="ts">
export default {
  name: "Person",
};
</script>
<!-- 这里let 出来的变量 方法都会被抛出 -->
<script lang="ts" setup>
let notice = "(其实我是用setup语法糖写的)";
</script>

<style scoped></style>
