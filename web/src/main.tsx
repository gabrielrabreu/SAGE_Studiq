import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import setupAxiosMock from "./libs/axios/axios.mock.ts";
import axiosInstance from "./libs/axios/axios.config.ts";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

if (import.meta.env.VITE_MOCK_API === "true") {
  setupAxiosMock(axiosInstance);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
