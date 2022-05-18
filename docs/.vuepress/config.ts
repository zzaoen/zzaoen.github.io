import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Aoen's blog",
      description: "Disk is always more reliable than memory",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Aoen's blog",
      description: "好记性不如烂笔头",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      // your options
    }),
  ],
});
