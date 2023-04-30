import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import AboutMartina from "./Pages/AboutMartina.tsx";
import Portfolio from "./Pages/Portfolio.tsx";
import StartPage from "./Pages/StartPage.tsx";
import "./main.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="/aboutMartina" element={<AboutMartina />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<h2> 404 page not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
