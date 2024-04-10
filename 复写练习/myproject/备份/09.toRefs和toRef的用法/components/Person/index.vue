<!--
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-22 11:44:20
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-03-01 10:59:35
 * @FilePath: \myproject\src\components\Person\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
      <h1 class="">展示模板语法</h1>
      <ul class="flex">
        <li class="flex flex-items-center flex-col mr60px">
          <p class="c-red text-18px">响应式 年龄：{{ person.age }}</p>
          <!-- <p class="c-red text-18px">结构值 年龄：{{ age }}</p> -->
          <button class="ml10px w-100px h-30px" @click="changeAge">
            改年龄
          </button>
        </li>
        <li class="flex flex-items-center flex-col">
          <p class="c-red text-18px">响应式 姓名：{{ person.name }}</p>
          <!-- <p class="c-red text-18px">结构值 姓名：{{ name }}</p> -->
          <button class="ml10px w-100px h-30px" @click="changeName">
            改名字
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from "vue";
let person = reactive({
  age: 18,
  name: "张三",
});
console.log("Person status", person);

/*
直接结构赋值
const { age, name } = person;
等价于
const age = person.age;
const name = person.name;
这样就是单纯声明了age，name 两个变量 与person无关联 所以也并不能触发 person 的响应机制 proxy代理
*/
/*
通过toRefs转换 加工成响应式对象 将person的属性转换 ref响应式对象
const { age, name } = toRefs(person);
console.log("age", age);
console.log("name", name);
*/
/*
通过toRef转换 加工成响应式对象 将person的属性转换 ref响应式对象
const age = toRef(person, "age");
console.log("age", age);
*/

/*
toRefs 与 toRef 都是将响应式对象 解构出来  所以两个都是响应式的 并且都指向同一个target 对象或者其属性
*/

function changeAge() {
  person.age += 1;
  console.log("changeAge", person.age);
}
function changeName() {
  person.name += "1";
  console.log("changeName", person.name);
}
</script>

<style scoped></style>
