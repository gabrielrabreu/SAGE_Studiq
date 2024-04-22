import React from "react";

import LoginForm from "./LoginForm";

const AuthPage: React.FC = () => {
  return (
    <div className="p-1 h-full grid grid-cols-2 gap-1">
      <div className="grid grid-rows-10 gap-1">
        <div className="row-span-1">
          <div className="grid grid-cols-4 h-full">
            <img src="/full-logo.png" alt="logo" />
          </div>
        </div>
        <div className="row-span-9 p-10">
          <LoginForm />
        </div>
      </div>
      <div className="bg-gray-300">Item 2</div>
    </div>
  );
};

export default AuthPage;
