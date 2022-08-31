import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  async setup() {
    if (typeof window !== 'undefined') {
      const sakana = document.createElement('div')
      sakana.id = 'sakana'
      sakana.style.position = 'fixed'
      sakana.style.right = '0'
      sakana.style.bottom = '0'
      document.body.appendChild(sakana)

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://cdn.jsdelivr.net/npm/sakana-widget@2.2.1/lib/sakana.min.js'
      document.body.appendChild(script)

      const loop = document.createElement('script')
      loop.type = 'text/javascript'
      loop.appendChild(
        document.createTextNode(`(async function loop() {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        while (window && window.SakanaWidget === undefined) {
            await sleep(100)
        }
        new SakanaWidget().mount('#sakana');
    })()`)
      )
      document.body.appendChild(loop)
    }
  },
}
