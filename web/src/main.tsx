import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App/App.tsx";
import setupAxiosMock from "./libs/axios/axios.mock.ts";
import axiosInstance from "./libs/axios/axios.config.ts";
import { store } from "./store/store.ts";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

if (import.meta.env.MODE === "sandbox") {
  setupAxiosMock(axiosInstance);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
