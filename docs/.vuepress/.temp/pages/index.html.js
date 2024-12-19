import comp from "/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"VuePress 教程\",\"tagline\":\"一个完整的 VuePress 使用指南\",\"actionText\":\"快速上手 →\",\"actionLink\":\"/guide/getting-started\",\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML，同时在加载后作为 SPA 运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present\"},\"headers\":[],\"git\":{\"updatedTime\":1734583549000,\"contributors\":[{\"name\":\"ganqingyao\",\"username\":\"ganqingyao\",\"email\":\"1421932626@qq.com\",\"commits\":1,\"url\":\"https://github.com/ganqingyao\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
