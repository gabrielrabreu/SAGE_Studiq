import React from "react";
import { useForm } from "react-hook-form";

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  onLogin: (formData: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit } = useForm<LoginFormValues>({
    mode: "onBlur",
  });

  const loginOptions = {
    email: { required: "Email is required" },
    password: { required: "Password is required" },
  };

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={handleSubmit((data) => {
        onLogin(data);
      })}
    >
      <div className="mt-8 content-center">
        <label
          className="
            ml-3 text-sm font-bold tracking-wide
            text-gray-700"
        >
          Email
        </label>
        <input
          className="
            w-full content-center text-base px-4 py-2 rounded-2xl 
            border-gray-300 focus:border-dark-primary-500 border-b focus:outline-none"
          type="text"
          placeholder="mail@gmail.com"
          data-testid="email-input"
          {...register("email", loginOptions.email)}
        />
      </div>
      <div className="mt-8 content-center">
        <label
          className="
            ml-3 text-sm font-bold tracking-wide
            text-gray-700"
        >
          Password
        </label>
        <input
          className="
            w-full content-center text-base px-4 py-2 border-b rounded-2xl 
            border-gray-300 focus:border-dark-primary-500 focus:outline-none"
          type="password"
          placeholder="Enter your password"
          data-testid="password-input"
          {...register("password", loginOptions.password)}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="h-4 w-4 rounded"
            type="checkbox"
            data-testid="remember-me-input"
            {...register("rememberMe")}
          />
          <label
            className="
              ml-2 block text-sm 
              text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a
            href="#"
            className="
              no-underline hover:underline 
              text-dark-primary-700"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="
            w-full flex justify-center p-4 rounded-full tracking-wide font-semibold cursor-pointer
            text-white bg-gradient-to-r from-dark-primary-700 to-dark-primary-600"
          data-testid="submit-button"
        >
          Sign in
        </button>
      </div>
      <p
        className="
          flex flex-col items-center justify-center mt-10 text-center text-sm 
          text-dark-mixed-500"
      >
        <span>Don't have an account?</span>
        <a
          href="#"
          className="
            no-underline cursor-pointer hover:underline
            text-dark-primary-700"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
