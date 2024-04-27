import React from "react";

interface SocialLoginProps {
  onSocialLogin: (provider: string) => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ onSocialLogin }) => {
  return (
    <div
      className="flex flex-row justify-center items-center space-x-3"
      data-testid="social-login-div"
    >
      <button
        className="
          w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg
          bg-white border"
        onClick={() => onSocialLogin("Google")}
        data-testid="google-provider-button"
      >
        <img
          className="w-4 h-4"
          src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
          alt="Google"
        />
      </button>
    </div>
  );
};

export default SocialLogin;
