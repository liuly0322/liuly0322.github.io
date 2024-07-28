import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

import './custom.css'

const yukiInit = async () => {
  const yuki = document.createElement('img')
  yuki.id = 'yuki'
  yuki.src = '/yuki.png'
  yuki.alt = 'Nagato Yuki'
  document.body.appendChild(yuki)
}

export default {
  ...DefaultTheme,
  setup() {
    onMounted(yukiInit)
  },
}
