"use client";

import { useLanguage } from "@/lib/providers/language-provider";
import { translations } from "@/lib/i18n/translations";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    
    for (const k of keys) {
      if (value?.[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };

  return { t };
}