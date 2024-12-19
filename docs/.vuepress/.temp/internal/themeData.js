export const themeData = JSON.parse("{\"logo\":\"/imgs/logo.svg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"children\":[{\"text\":\"快速上手\",\"link\":\"/guide/getting-started\"},{\"text\":\"配置\",\"link\":\"/guide/configuration\"}]},{\"text\":\"了解更多\",\"children\":[{\"text\":\"GitHub\",\"link\":\"https://github.com/g68q68y68/vue_press.git\"},{\"text\":\"更新日志\",\"link\":\"/changelog\"}]}],\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"collapsible\":true,\"children\":[\"/guide/getting-started.md\",\"/guide/configuration.md\"]},{\"text\":\"进阶\",\"collapsible\":true,\"children\":[\"/guide/advanced/markdown.md\",\"/guide/advanced/theme.md\"]}]},\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"editLinkPattern\":\":repo/edit/:branch/:path\",\"docsRepo\":\"g68q68y68/vue_press\",\"docsBranch\":\"master\",\"docsDir\":\"docs\",\"lastUpdated\":true,\"lastUpdatedText\":\"上次更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"notFound\":[\"页面未找到\"],\"backToHome\":\"返回首页\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
