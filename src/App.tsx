import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExperimentComponent } from "./experiment";
import { CustomAppBar } from "./components/AppBar/CustomAppBar";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: "64px" }}>
        <CustomAppBar />
      </div>

      <div style={{ height: "calc(100vh -64px)" }}>
        <Router>
          <Routes>
            <Route Component={ExperimentComponent} path="*" />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}
