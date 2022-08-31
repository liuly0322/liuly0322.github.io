import DefaultTheme from 'vitepress/theme'
import SakanaWidget from 'sakana-widget'

/**
 * 使用第三方组件库
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  },
  setup() {
    const sakana = document.createElement('div')
    sakana.id = 'sakana'
    sakana.style.position = 'fixed'
    sakana.style.right = '1em'
    sakana.style.bottom = '1em'
    document.body.appendChild(sakana)
    new SakanaWidget().mount('#sakana')
  },
}
