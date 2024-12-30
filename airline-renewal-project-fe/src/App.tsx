import { RouterProvider } from "react-router-dom";
import Router from "@routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@lib/tanstack-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}

export default App;
