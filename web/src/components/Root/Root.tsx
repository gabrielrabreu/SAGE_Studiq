import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../../contexts/AuthContext";

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <Outlet />
      <ToastContainer />
    </AuthProvider>
  );
};

export default Root;
