import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./theme";
import { Todos } from "./pages/todos/Todos";
import { WelcomePage } from "./pages/Welcome";
import { MuniStatus } from "./pages/MuniStatus";
import { ProfilePage } from "./pages/ProfilePage";
import { ShoppingList } from "./pages/ShoppingList";
import { NotFoundError } from "./utils/NotFoundError";
import { CustomAppBar } from "./components/AppBar/CustomAppBar";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <NotFoundError />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/muniStatus",
    element: <MuniStatus />,
  },
  {
    path: "/shopping",
    element: <ShoppingList />,
  },
  {
    path: "/todo",
    element: <Todos />,
  },
]);

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
                <RouterProvider router={browserRouter} />
              </div>
            </div>
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
