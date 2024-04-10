<!--
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-22 11:44:20
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-02-23 10:16:21
 * @FilePath: \myproject\src\components\Person\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
      <h1 class="">展示模板语法</h1>
      <ul>
        <li class="flex flex-items-center">
          <p class="c-red text-18px">年龄：{{ person.age }}</p>
          <button class="ml10px w-100px h-30px" @click="changeAge">
            改年龄
          </button>
        </li>
        <li class="flex flex-items-center">
          <p class="c-red text-18px">姓名：{{ person.name }}</p>
          <button class="ml10px w-100px h-30px" @click="changeName">
            改名字
          </button>
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="({ name }, index) in gamelist" :key="index">
          {{ name }}
        </li>
      </ul>
      <button @click="changeName1">测试变化</button>
    </div>
  </div>
</template>
<script lang="ts" setup name="Person">
// 引入引用型数据的响应化方法
import { ref } from "vue";
// 传参获取 响应式对象  Proxy实例对象 完成数据的响应化
let person = ref({
  age: 18,
  name: "张三",
});

let gamelist = ref([
  { id: 1, name: "王者荣耀" },
  { id: 2, name: "英雄联盟" },
  { id: 3, name: "绝地求生" },
  { id: 4, name: "和平精英" },
]);
let obj = ref({
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
    },
  },
});
// 备注 reactive方法 获取的响应式对象 是深度响应式
// 也就是说 对象的属性值也是响应式的
console.log("Person status", person, gamelist, obj);
console.log(obj);
/* 
    ref可以将引用类型数据转换为响应式数据 但是他做了一个兼容判断
    如果传入的是引用类型数据 他会 调用reactive 返回一个响应式对象
    如果传入的是基本类型数据 他会直接返回一个响应式数据
    ref 和 reactive 的区别 变现出来就是对象替换
    个人认为
    两者的差异就在ref的做了兼容，所以 性能上会消耗更多 但是 可以支持整个对象的替换 
    整个对象的替换会触发ref的set方法 对象属性替换会触发Proxy的响应代理
    reactive 只能支持对象属性的替换 不能支持整个对象的替换 
    因为整个对象的替换并不能让模板中引用的响应对象有变化

    这里来说就是对于引用对象的基本理解 加深
*/

function changeName() {
  if (person.value.name == "张三") {
    person.value.name = "李四";
  } else {
    person.value.name = "张三";
  }
}
function changeAge() {
  console.log("changeAge");
  person.value.age = Math.floor(Math.random() * 100);
}
function changeName1() {
  console.log("changeName1");
  gamelist.value[0].name += "1";
}
</script>

<style scoped></style>
