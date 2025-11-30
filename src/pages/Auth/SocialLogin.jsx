import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-2 my-4">
        <div className="h-px w-16 bg-gray-400"></div>
        <span className="text-gray-700">or</span>
        <div className="h-px w-16 bg-gray-400"></div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full flex items-center justify-center gap-3 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
