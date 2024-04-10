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
import { reactive } from "vue";
// 传参获取 响应式对象  Proxy实例对象 完成数据的响应化
let person = reactive({
  age: 18,
  name: "张三",
});

const gamelist = reactive([
  { id: 1, name: "王者荣耀" },
  { id: 2, name: "英雄联盟" },
  { id: 3, name: "绝地求生" },
  { id: 4, name: "和平精英" },
]);
// 备注 reactive方法 获取的响应式对象 是深度响应式
// 也就是说 对象的属性值也是响应式的
console.log("Person status", person);

function changeName() {
  if (person.name == "张三") {
    person.name = "李四";
  } else {
    person.name = "张三";
  }
}
function changeAge() {
  console.log("changeAge");
  person.age = Math.floor(Math.random() * 100);
}
function changeName1() {
  console.log("changeName1");
  gamelist[0].name += "1";
}
</script>

<style scoped></style>
