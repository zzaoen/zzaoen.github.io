import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  // home page background picture
  // /Users/brucezhao/Acodes/Amy/zzaoen.github.io/node_modules/vuepress-theme-hope/lib/client/module/blog/assets/hero.jpg
  

  hostname: "https://zzaoen.github.io",

  // article list information the author name
  // author: {
  //   name: "Aoen",
  //   url: "https://zzaoen.github.io",
  // },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "zzaoen",

  docsDir: "demo/src",

  pageInfo: [
    // "Author", 
    "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
      Linkedin: "https://example.com",
      // QQ: "https://example.com",
      // Rss: "https://example.com",
      Wechat: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  // darkmode: "enable",

  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
  // pure: true,

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Footer is coming",

      displayFooter: true,

      blog: {
        description: "👨‍💻 🎾 🏎️",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "目前还没有页脚",

      displayFooter: true,

      blog: {
        description: "写代码，网球，小汽车",
        intro: "/zh/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
