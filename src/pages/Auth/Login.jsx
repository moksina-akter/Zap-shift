import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 mt-20 mb-10 p-5 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Welcome Back
      </h2>
      <p className="py-4 text-center">Login with ZapShift</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 text-sm mt-1">
              Password must be 6 characters or longer
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-primary hover:bg-lime-200 mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <p className="text-center mt-4">
        Don’t have any account?
        <Link
          to="/register"
          className="text-primary hover:text-blue-900 font-bold underline"
        >
          Register
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
