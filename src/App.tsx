import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CustomAppBar } from "./components/AppBar/CustomAppBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "./pages/Welcome";
import { NotFoundError } from "./utils/NotFoundError";
import { ProfilePage } from "./pages/ProfilePage";
import { MuniStatus } from "./pages/MuniStatus";
import { ShoppingList } from "./pages/ShoppingList";
import { Todos } from "./pages/Todos";

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

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: "64px" }}>
        <CustomAppBar />
      </div>

      <div style={{ height: "calc(100vh -64px)" }}>
        <RouterProvider router={browserRouter} />
      </div>
    </QueryClientProvider>
  );
}
