// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';

// Migration : l'ancien code langue "esp" devient "es"
if (localStorage.getItem('language') === 'esp') {
  localStorage.setItem('language', 'es');
}

const language = () => {
  return localStorage.getItem('language') || 'fr';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      es: { translation: translationES },
    },
    lng: language(), // Langue par défaut
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false, // React échappe automatiquement les valeurs
    },
  });

// Persistance et synchronisation de l'attribut lang à chaque changement
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
