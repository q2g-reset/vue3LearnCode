<!-- 结构 -->
<template>
  <!-- 结构中节点不强制要求为单节点了 -->
  <div>
    <h1 class="">展示模板语法</h1>
    <p class="c-red text-18px text-left">年龄：{{ age }}</p>
    <p class="c-green font-size-19px text-center">姓名：{{ name }}</p>
    <p class="c-yellow font-size-20px text-right">性别：{{ gender }}</p>
    <div class="flex flex-items-center justify-center">
      <button class="m4px w-200px h-30px" @click="changeName">改名字</button>
      <button class="m4px w-200px h-30px" @click="changeAge">改年龄</button>
      <button class="m4px w-200px h-30px" @click="changeGender">改性别</button>
    </div>
  </div>
</template>

<!-- 行为 -->
<script lang="ts">
export default {
  //   组件名
  name: "App",
  //setup中 是没法使用this的 并且 setup 执行早于 created 之前 所以setup的早于 vm this的构建
  //setup中的this 是undefined 也没法读取data methods  这类组合api的方法
  // 但是data中的数据是可以读取的setup 执行返回的值
  // methods中的方法是可以读取的setup 执行返回的值

  //  setup 语法糖
  setup() {
    // 设置需要的数据 状态
    let age = 18;
    let name = "张三";
    let gender = "男";
    // 加工 数据的方法
    function changeName() {
      console.log("changeName");
      if (name === "张三") name = "李四";
      else name = "张三";
    }
    function changeAge() {
      console.log("changeAge");

      age = Math.floor(Math.random() * 100);
    }
    function changeGender() {
      console.log("changeGender");

      if ((gender = "男")) name = "女";
      else name = "男";
    }

    // 返回模板需要使用的数据和方法
    return { age, name, gender, changeName, changeAge, changeGender };
    // 返回一个渲染函数 覆盖模板
    // return () => {
    //   return "aDom";
    // };
  },
};
</script>
<!-- 样式 -->
<style></style>
