"use client";

import React, { createContext, useContext, useState } from "react";
import { en } from "../app/i18n/locales/en";
import { pt } from "../app/i18n/locales/pt";
import { es } from "../app/i18n/locales/es";
import { fr } from "../app/i18n/locales/fr";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
  t: (key: string) => "",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");

  const translations = {
    en,
    pt,
    es,
    fr,
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[language as keyof typeof translations];
    for (const k of keys) {
      value = value[k as keyof typeof value];
      if (!value) break;
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
