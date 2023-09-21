import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./pages/Page404";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blueprints from "./pages/Blueprints";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <Project />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
      },
      {
        path: "projects/:projectId/blueprints",
        element: <Blueprints />,
      },
      {
        path: "blueprints/:blueprintId",
        element: <Blueprints />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
