import React from "react";
import "./App.css";
import { GlobalStyles } from "./GlobalStyle";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home></Home>
    </>
  );
};

export default App;
