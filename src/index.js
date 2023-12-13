import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import location from "./store/location";
import { ChakraProvider } from "@chakra-ui/react";
import { _theme } from "./style/theme";

const queryClient = new QueryClient();
const store = legacy_createStore(location);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={_theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
