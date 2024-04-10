// 引入createApp函数 创建应用
import { createApp } from "vue";
// 引入App组件
import App from "./App.vue";

// 创建以 App 为根组件 并挂载到 index.html id为app的div上
createApp(App).mount("#app");