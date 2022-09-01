import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  async setup() {
    if (typeof window !== 'undefined') {
      const SakanaWidget = (await import('./sakana')).default

      const sakana = document.createElement('div')
      sakana.id = 'sakana'
      sakana.style.position = 'fixed'
      sakana.style.right = '0'
      sakana.style.bottom = '0'
      sakana.style.zIndex = '20'
      document.body.appendChild(sakana)

      const takina = SakanaWidget.getCharacter('takina')
      takina.initialState = {
        ...takina.initialState,
        i: 0.001,
        d: 1,
      }
      SakanaWidget.registerCharacter('takina-slow', takina)
      new SakanaWidget({ character: 'takina-slow' }).mount('#sakana')
    }
  },
}
