import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use (initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;