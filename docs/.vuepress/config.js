import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  // 指定打包工具
  bundler: viteBundler(),
  
  // 基础配置
  base: '/', // 部署站点的基础路径
  lang: 'zh-CN', // 站点语言
  title: 'VuePress 教程',
  description: '一个完整的 VuePress 使用指南',
  
  // head 标签配置
  head: [
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }],
    ['meta', { name: 'author', content: 'Your Name' }],
    ['meta', { name: 'keywords', content: 'vuepress, vue, 文档' }],
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  // 指定默认主题配置
  theme: defaultTheme({
    // 导航栏配置
    logo: '/imgs/logo.svg', // 导航栏 Logo
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: '指南', 
        children: [
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '配置', link: '/guide/configuration' },
        ]
      },
      { 
        text: '了解更多', 
        children: [
          { text: 'GitHub', link: 'https://github.com/g68q68y68/vue_press.git' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsible: true, // 可折叠
          children: [
            '/guide/getting-started.md',
            '/guide/configuration.md',
          ],
        },
        {
          text: '进阶',
          collapsible: true,
          children: [
            '/guide/advanced/markdown.md',
            '/guide/advanced/theme.md',
          ],
        }
      ],
    },
    
    // 文章相关配置
    editLink: true, // 启用编辑链接
    editLinkText: '在 GitHub 上编辑此页',
    editLinkPattern: ':repo/edit/:branch/:path',
    docsRepo: 'g68q68y68/vue_press',
    docsBranch: 'master',
    docsDir: 'docs',
    
    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    
    // 贡献者
    contributors: true,
    contributorsText: '贡献者',
    
    // 其他配置
    notFound: ['页面未找到'], // 404 页面文字
    backToHome: '返回首页', // 404 页面按钮文字
  }),

  // Markdown 配置
  markdown: {
    headers: {
      level: [1,2, 3, 4,5,6] // 提取标题到侧边栏的级别
    },
    code: {
      lineNumbers: true // 代码块显示行号
    },
    // 在 Markdown 中启用 Vue 语法
    importCode: true,
    // 在 Markdown 中启用 TIP/WARNING 等容器
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  
  // 开发服务器配置
  dev: {
    port: 8080, // 开发服务器端口
    host: '0.0.0.0', // 主机名
    open: true, // 是否自动打开浏览器
    https: false // 是否启用 https
  },

  // 添加搜索插件配置
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags || [],
      hotKeys: ['s', '/'],  // 快捷键
      maxSuggestions: 10,   // 最大搜索建议数
      // 自定义搜索结果
      getSearchHints: (query) => {
        if (!query) return null
        return `搜索 "${query}" 的结果`
      }
    }),
  ]
}) 