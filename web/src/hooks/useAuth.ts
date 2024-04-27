import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth should be used inside of AuthProvider");
  }
  return context;
};
