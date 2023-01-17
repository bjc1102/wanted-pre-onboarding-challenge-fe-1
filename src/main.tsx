import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./lib/history";

import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // @ts-expect-error
  <HistoryRouter history={history}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </HistoryRouter>
);
