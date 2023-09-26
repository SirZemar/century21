import React from "react";
import { GlobalStyles } from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./languageContext";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LanguageProvider>
        <Navbar />
        <Outlet />
      </LanguageProvider>
    </>
  );
};

export default App;
