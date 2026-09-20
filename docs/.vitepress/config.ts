import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'

const buildTime = new Date()

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 *
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
  title: '刘良宇的个人主页',
  description: '刘良宇的个人主页',
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
  },
  transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.buildTime = {
        iso: buildTime.toISOString(),
        text: new Intl.DateTimeFormat('sv-SE', {
          timeZone: 'Asia/Shanghai',
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit',
          hour12: false,
        }).format(buildTime),
      }
    }
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liuly0322',
      },
    ],
    nav,
    lastUpdatedText: 'Updated Date',
  },
})

export default config
