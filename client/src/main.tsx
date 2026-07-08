import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Solution from "./pages/Solution/Solution";
import Pricing from "./pages/pricing/Pricing";
import Resources from "./pages/Resources/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/solutions",
        element: <Solution />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
