/*
 * @Author: qianergou 1599164493@qq.com
 * @Date: 2024-02-20 10:03:14
 * @LastEditors: qianergou 1599164493@qq.com
 * @LastEditTime: 2024-02-22 10:14:26
 * @FilePath: \myproject\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
/*********************************************************************************************/
/* 开发插件 */
// 组件名简写 插件
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// 引入Unocss
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
/*********************************************************************************************/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    Unocss({ presets: [presetUno(), presetAttributify(), presetIcons()] }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
