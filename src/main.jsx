import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0a0f0d", // dark background
    800: "#e63946", // vibrant red accent
    700: "#1d3557", // dark blue
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Impact, Charcoal, sans-serif",
    body: "Arial, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
