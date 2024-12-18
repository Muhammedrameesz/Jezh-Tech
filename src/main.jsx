import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={Router} />
    </HelmetProvider>
  </StrictMode>
);
