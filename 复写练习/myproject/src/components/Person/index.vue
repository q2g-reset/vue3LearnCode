<!--
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-22 11:44:20
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-03-08 16:36:02
 * @FilePath: \myproject\src\components\Person\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1 class="">监视 1 ref响应对象</h1>
    <h3>当前数值为{{ totalNum }}</h3>
    <button @click="addOne">增加</button>
  </div>
</template>
<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
let totalNum = ref(1);
console.log("Person status", totalNum);
const addOne = () => {
  totalNum.value++;
};
const stopWatchTotalNum = watch(totalNum, (newVal, oldVal) => {
  console.log("totalNum", newVal, oldVal);
  if (newVal > 5) {
    console.log("监听解除");
    totalNum.value = 6;
    // 通过这里 可以了解到 渲染机制
    // 其他地方会在更改后触发监听 尽量不要再监听中更改监听对象
    // 容易出现死循环
    // stopWatchTotalNum();
  }
});
</script>

<style scoped></style>
