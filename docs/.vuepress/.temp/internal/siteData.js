export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"VuePress 教程\",\"description\":\"一个完整的 VuePress 使用指南\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/imgs/favicon.ico\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Your Name\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"vuepress, vue, 文档\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
