import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import ar from './locals/ar.json';
import en from './locals/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: 'ar', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;