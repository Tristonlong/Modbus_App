import { createI18n } from 'vue-i18n'
import zh from './zh-CN'
import en from './en-US'

const defaultLocale = localStorage.getItem('LauType') || 'zh-CN'

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false, // you must set `false`, to use Composition API
  locale: defaultLocale, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: { 'en-US': en, 'zh-CN': zh },
})

export default i18n
