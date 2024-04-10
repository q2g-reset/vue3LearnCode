<template>
  <div>
    <br />
    <div>
      <h1 class="">展示模板语法</h1>
      <p class="c-red text-18px text-left">年龄：{{ age }}</p>
      <p class="c-green font-size-19px text-center">姓名：{{ name }}</p>
      <p class="c-yellow font-size-20px text-right">性别：{{ gender }}</p>
      <div class="flex flex-items-center justify-center">
        <button class="m4px w-200px h-30px" @click="changeName">改名字</button>
        <button class="m4px w-200px h-30px" @click="changeAge">改年龄</button>
        <button class="m4px w-200px h-30px" @click="changeGender">
          改性别
        </button>
        <button class="m4px w-200px h-30px" @click="showTost">显示提示</button>
      </div>
    </div>
    <br />
  </div>
</template>
<script lang="ts" setup name="Person">
// 引入基础类型数据的响应化方法
import { ref } from "vue";
// 传入基础类型数据  获取到了一个基础类型 的响应式对象 RefImpl实例对象
// 这个对象中有一个value属性 用来存储基础类型的值 模板中使用 隐式的获取到了这个value属性
// 通过ref创建的基础类型的响应式对象 通过.value属性获取到的值是基础类型的值
let age = ref(18);
let name = ref("张三");
let gender = ref("男");
let notice = "(其实我是用setup语法糖写的)";

console.log("Person status", age, name, gender, notice);
function changeName() {
  console.log("changeName");
  if (name.value == "张三") name.value = "李四";
  else name.value = "张三";
}
function changeAge() {
  console.log("changeAge");

  age.value = Math.floor(Math.random() * 100);
}
function changeGender() {
  console.log("changeGender");

  if (gender.value == "男") gender.value = "女";
  else gender.value = "男";
}

function showTost() {
  console.log("showTost");
  alert(notice);
}
</script>

<style scoped></style>
