import React, { useState, useMemo } from "react";
import { GlobalStyles } from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import languageContext from "./languageContext";

const App: React.FC = () => {
  const [language, setLanguage] = useState("PT");

  const valueMemo = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <>
      <GlobalStyles />
      <languageContext.Provider value={valueMemo}>
        <Navbar />
        <Outlet />
      </languageContext.Provider>
    </>
  );
};

export default App;
