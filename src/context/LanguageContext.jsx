import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations
    const loadTranslations = async () => {
      try {
        const arTranslations = await import('../data/translations/ar.json');
        const enTranslations = await import('../data/translations/en.json');
        setTranslations({
          ar: arTranslations.default,
          en: enTranslations.default,
        });
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, []);

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    if (typeof value === 'string') {
      // Replace parameters in translation
      return value.replace(
        /\{(\w+)\}/g,
        (match, param) => params[param] || match
      );
    }

    return key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
