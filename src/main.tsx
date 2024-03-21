import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Bounce, ToastContainer } from "react-toastify";

import { App } from "./App.tsx";
import { theme } from "./theme.ts";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        transition={Bounce}
      />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
