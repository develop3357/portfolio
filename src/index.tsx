import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { GlobalStyle } from "./GlobalStyle";
import router from "./routes/router";
import { paleNight } from "./paleNightTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={paleNight}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
