import React from "react";
import { defaultLangCode } from "./i18n";

export const LanguageContext = React.createContext({
  language: defaultLangCode,
  setlanguage: (newLangCode) => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setlanguage] = React.useState(defaultLangCode);
  return (
    <LanguageContext.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
