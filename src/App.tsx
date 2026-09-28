import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import './i18n';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

function ChooseLanguage({ changeLanguage }: { changeLanguage: (language: string) => void }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#0D172B] via-white to-[#B26FCD]">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={() => changeLanguage('fr')}
          className="cursor-pointer px-12 py-8 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[8px_8px_0px_0px_#B26FCD] transition duration-200 min-w-28"
        >
          🇫🇷 Français
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className="cursor-pointer px-12 py-8 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[8px_8px_0px_0px_#B26FCD] transition duration-200 min-w-28"
        >
          🇺🇸 English
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className="cursor-pointer px-12 py-8 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[8px_8px_0px_0px_#B26FCD] transition duration-200 min-w-28"
        >
          🇪🇸 Español
        </button>
      </motion.div>
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();
  const [languageChoose, setLanguageChoose] = useState(!!localStorage.getItem('language'));

  // Charger la langue dès le départ
  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language).then(() => setLanguageChoose(true));
    }
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
      setLanguageChoose(true);
    });
  };

  return (
    <>
      {languageChoose ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      ) : (
        <ChooseLanguage changeLanguage={changeLanguage} />
      )}
    </>
  );
}

export default App;
