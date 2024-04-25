import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout/Layout";
import axiosInstance from "./libs/axios/axios.config";
import useAxiosMock from "./libs/axios/axios.mock";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />}></Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </>
  )
);

const App = () => {
  useAxiosMock(axiosInstance);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
