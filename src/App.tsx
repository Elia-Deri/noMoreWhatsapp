import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { Route, Routes } from "react-router";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./theme";
import { Todos } from "./pages/todos/Todos";
import { WelcomePage } from "./pages/Welcome";
import { MuniStatus } from "./pages/MuniStatus";
import { ProfilePage } from "./pages/ProfilePage";
import { ShoppingList } from "./pages/ShoppingList";
import { NotFoundError } from "./utils/NotFoundError";
import { CustomAppBar } from "./components/AppBar/CustomAppBar";

const queryClient = new QueryClient();

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <div style={{ height: "100vh", width: "100vw" }}>
              <div style={{ height: "64px", width: "100vw" }}>
                <CustomAppBar />
              </div>

              <div style={{ height: "calc(100vh -64px)" }}>
                <Routes>
                  <Route
                    ErrorBoundary={NotFoundError}
                    index
                    element={<WelcomePage />}
                  />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/muniStatus" element={<MuniStatus />} />
                  <Route path="/shopping" element={<ShoppingList />} />
                  <Route path="/todo" element={<Todos />} />
                </Routes>
              </div>
            </div>
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
