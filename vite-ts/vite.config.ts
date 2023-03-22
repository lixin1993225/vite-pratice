/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-15 21:45:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-16 23:47:06
 * @FilePath: \practiceVite\vite-ts\vite-config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import path from "path";
import VitePluginCDNImport from "vite-plugin-cdn-import";
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./src/product.html"),
      },
      output: {
        manualChunks: (id: string) => {
          console.log("id", id);
          //ts认为当前环境不在es之后，includes是es6的语法
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    checker({
      typescript: true,
    }),
    VitePluginCDNImport({
      modules: [
        {
          name: "lodash",
          var: "_",
          path: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
        },
      ],
    }),
  ],
});
 