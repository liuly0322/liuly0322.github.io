import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

import 'sakana-widget/lib/index.css';
import './custom.css'

const sakanaInit = async () => {
  const SakanaWidget = (await import('sakana-widget')).default

  const sakana = document.createElement('div')
  sakana.id = 'sakana'
  document.body.appendChild(sakana)

  const takina = SakanaWidget.getCharacter('takina')!
  takina.initialState = {
    ...takina.initialState,
    i: 0.1,
    d: 0.9,
  }
  SakanaWidget.registerCharacter('takina-slow', takina)
  new SakanaWidget({ character: 'takina-slow' }).mount('#sakana')
}

export default {
  ...DefaultTheme,
  setup() {
    onMounted(sakanaInit)
  },
}
