import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../../contexts/AuthContext";
import { useAxiosMock } from "../../libs/axios/axios.mock";
import axiosInstance from "../../libs/axios/axios.config";

const Root: React.FC = () => {
  useAxiosMock(axiosInstance);

  return (
    <AuthProvider>
      <Outlet />
      <ToastContainer />
    </AuthProvider>
  );
};

export default Root;
