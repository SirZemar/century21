import React, { ReactNode, createContext, useMemo, useState } from "react";

const languageContext = createContext({
  language: "",
  setLanguage: (language: string) => {},
});

interface Props {
  children: ReactNode;
}
export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState(
    /^pt\b/.test(navigator.language) ? "PT" : "EN"
  );

  const valueMemo = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <languageContext.Provider value={valueMemo}>
      {children}
    </languageContext.Provider>
  );
};
export default languageContext;
