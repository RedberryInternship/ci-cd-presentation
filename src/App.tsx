import "./app.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Planets } from "./pages/Planets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./Components/ErrorBoundary";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Login />
        <Register />
        <ErrorBoundary
          fallback={<div className="error">Couldn't fetch planets</div>}
        >
          <Planets />
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}
