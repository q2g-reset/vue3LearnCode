/*
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-20 14:26:07
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-02-22 14:33:34
 * @FilePath: \myproject\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 引入createApp函数 创建应用
import { createApp } from "vue";
// 引入App组件
import App from "./App.vue";

// 导入Unocss
import "uno.css";

// 创建以 App 为根组件 并挂载到 index.html id为app的div上
createApp(App).mount("#app");
