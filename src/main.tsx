import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ScrollRouter from "./components/ScrollRouter";
import ProjectDetail from "./components/ProjectDetail";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ScrollRouter /> },
      { path: "aboutMe", element: <ScrollRouter /> },
      { path: "project", element: <ScrollRouter /> },
      { path: "experience", element: <ScrollRouter /> },
      { path: "contact", element: <ScrollRouter /> },
      { path: "projects/:projectId", element: <ProjectDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
