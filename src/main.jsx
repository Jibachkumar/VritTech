import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskThreePage from "./pages/TaskThreePage.jsx";
import TaskTwoPage from "./pages/TaskTwoPage.jsx";
import TaskOnePage from "./pages/TaskOnePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/taskthree",
    element: <TaskThreePage />,
  },
  {
    path: "/tasktwo",
    element: <TaskThreePage />,
  },
  {
    path: "/taskone",
    element: <TaskThreePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
