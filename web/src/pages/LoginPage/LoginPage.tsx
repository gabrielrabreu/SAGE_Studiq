import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import SocialLogin from "./components/SocialLogin/SocialLogin";
import LoginForm, { LoginFormValues } from "./components/LoginForm/LoginForm";
import { login } from "../../services/auth.service";
import {
  setAccessToken,
  setRefreshToken,
  setSessionUser,
} from "../../utils/local-storage.utils";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    await login(data)
      .then((response) => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setSessionUser({
          name: response.data.userName,
          email: response.data.userEmail,
          avatarUrl: response.data.userAvatarUrl,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSocialLogin = (provider: string) => {
    throw new Error(`Provider '${provider}' not implemented yet.`);
  };

  return (
    <div className="relative min-h-screen flex ">
      <div
        className="
          flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 
          bg-white"
      >
        <div
          className="
            sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-no-repeat bg-cover relative 
            bg-dark-primary-200 text-white"
        >
          <div
            className="
              absolute bg-gradient-to-b opacity-75 inset-0 z-0
              from-dark-mixed-200 to-dark-mixed-500"
          ></div>
          <div className="w-full max-w-md z-10"></div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          className="
            md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none 
            bg-white"
        >
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2
                className="
                  mt-6 text-3xl font-bold 
                  text-gray-900"
              >
                Welcome Back!
              </h2>
              <p
                className="
                  mt-2 text-sm 
                  text-gray-500"
              >
                Please sign in to your account
              </p>
            </div>
            <SocialLogin onSocialLogin={handleSocialLogin} />
            <div className="flex items-center justify-center space-x-2">
              <span
                className="
                  h-px w-16 
                  bg-gray-200"
              ></span>
              <span
                className="
                  font-normal 
                  text-gray-300 "
              >
                or continue with
              </span>
              <span
                className="
                  h-px w-16 
                  bg-gray-200"
              ></span>
            </div>
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
