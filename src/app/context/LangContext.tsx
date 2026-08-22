import { createContext, useContext, useState, type ReactNode } from "react";
import { TRANSLATIONS, type Lang, type Translation } from "../i18n/translations";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

export const LangContext = createContext<LangContextValue>({
  lang: "ko",
  setLang: () => {},
  t: TRANSLATIONS.ko,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" || saved === "ko" ? saved : "ko";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("portfolio_lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
