import React from "react";
import { GlobalStyles } from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
