import { AxiosResponse } from "axios";
import axiosInstance from "../libs/axios/axios.config";
import { LoginFormValues } from "../pages/LoginPage/components/LoginForm/LoginForm";

interface LoginResult {
  accessToken: string;
  refreshToken: string;
  userName: string;
  userEmail: string;
  userAvatarUrl: string;
}

export const login = async (
  data: LoginFormValues
): Promise<AxiosResponse<LoginResult, LoginFormValues>> => {
  return await axiosInstance.post("api/login", data);
};
