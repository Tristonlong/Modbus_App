import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import i18n from '@/locale'
// import { VueI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
// import * as socketApi from './utils/websocket'

import './assets/main.css'
// import wcKeyBoard from 'wc-keyboard'
// import 'wc-keyboard/style.css'

const app = createApp(App)
const pinia = createPinia()
// const i18n = new VueI18n({

// })

app.use(pinia)
// app.use(VueI18n)
app.use(router)
app.use(i18n)
// app.use(wcKeyBoard)
app.mount('#app')
