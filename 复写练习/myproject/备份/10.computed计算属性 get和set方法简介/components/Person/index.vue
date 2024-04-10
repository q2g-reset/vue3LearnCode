<!--
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-22 11:44:20
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-03-01 15:46:34
 * @FilePath: \myproject\src\components\Person\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
      <h1 class="">展示模板语法</h1>
      <ul class="flex">
        <li class="mr60px">
          <div>姓</div>
          <input type="text" v-model="firstName" />
        </li>
        <li class=" ">
          <div>名</div>
          <input type="text" v-model="secondName" />
        </li>
      </ul>
      <hr />
      <div>
        <h1 class="">展示计算属性</h1>
        <div>姓名: {{ fullName }}</div>
      </div>
      <hr />
      <button @click="changeNameByFullname">更改名字为雷书</button>
    </div>
  </div>
</template>
<script lang="ts" setup name="Person">
import { reactive, toRefs, computed } from "vue";
let person = reactive({
  firstName: "钱",
  secondName: "二狗",
});
const { firstName, secondName } = toRefs(person);
console.log("Person status", person);
/* 
计算属性 
简写  只使用get 方法 只读不写
const fullName = computed(() => {
  return firstName.value + secondName.value;
});


完整写法
一共是 两个参数
get 和 set 方法
get 方法是必须的
set 方法是可选的

计算属性优势在于有缓存
可以提高性能
set方法是用来设置值的
但是原理其实也是拦截到了set的值 然后自己通过set 方法来更改值 或则是做一些其他的操作
*/
const fullName = computed({
  get: () => {
    return firstName.value + secondName.value;
  },
  set: (setValue) => {
    console.log("setValue", setValue);
    const names = setValue.split(" ");
    person.firstName = names[0];
    person.secondName = names[1];
  },
});
console.log("fullName", fullName);

const changeNameByFullname = () => {
  // person.firstName = "雷";
  // person.secondName = "书";
  fullName.value = "雷 书";
};
</script>

<style scoped></style>
