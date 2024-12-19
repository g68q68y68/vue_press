export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/changelog.html", { loader: () => import(/* webpackChunkName: "changelog.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/changelog.html.js"), meta: {"title":"更新日志"} }],
  ["/guide/configuration.html", { loader: () => import(/* webpackChunkName: "guide_configuration.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/guide/configuration.html.js"), meta: {"title":"配置指南"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速上手"} }],
  ["/guide/advanced/markdown.html", { loader: () => import(/* webpackChunkName: "guide_advanced_markdown.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/guide/advanced/markdown.html.js"), meta: {"title":"Markdown 增强"} }],
  ["/guide/advanced/theme.html", { loader: () => import(/* webpackChunkName: "guide_advanced_theme.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/guide/advanced/theme.html.js"), meta: {"title":"主题定制"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ganqingyao/Desktop/learn_project/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
