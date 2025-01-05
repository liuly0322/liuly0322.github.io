import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 *
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
  title: 'undef_baka 的个人主页',
  description: 'undef_baka 的个人主页',
  lang: 'zh-CN',
  lastUpdated: true,
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
