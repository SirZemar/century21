import React from "react";
import "./App.css";
import { GlobalStyles } from "./GlobalStyle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Projects />
    </>
  );
};

export default App;
