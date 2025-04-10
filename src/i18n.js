// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/esp/translation.json';

const language = () => {
  return localStorage.getItem('language')
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      esp: { translation: translationES },
    },
    lng: language(), // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false, // React échappe automatiquement les valeurs
    },
  });

export default i18n;
