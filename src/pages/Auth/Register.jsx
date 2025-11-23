// import React from "react";
// import { useForm } from "react-hook-form";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const HandleRegister = (data) => console.log(data);
//   return (
//     <div>
//       <form onSubmit={handleSubmit(HandleRegister)}>
//         <fieldset className="fieldset">
//           <label className="label">Email</label>
//           <input
//             {...register("email", { required: true })}
//             type="email"
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-600">Email is required</p>
//           )}
//           <label className="label">Password</label>
//           <input
//             {...register("password", {
//               required: true,
//               minLength: 6,
//               pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
//             })}
//             type="password"
//             className="input"
//             placeholder="Password"
//           />
//           {errors.password?.type === "required" && (
//             <p className="text-red-600">Password is required</p>
//           )}
//           {errors.password?.type === "minLength" && (
//             <p className="text-red-600">
//               Password must be 6 characters or longer
//             </p>
//           )}
//           {errors.password?.type === "pattern" && (
//             <p className="text-red-600">
//               Password must have with at least one uppercase, at least one
//               lowercase, at least one number, at least one special characters
//             </p>
//           )}
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Login</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();

  const HandleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex items-center justify-center  py-10 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold  text-gray-800">Create an Account</h2>
        <p className="py-4"> Register with ZapShift </p>
        <CgProfile className="text-4xl text-gray-400" />
        <form onSubmit={handleSubmit(HandleRegister)} className="space-y-4">
          <div>
            <label className="label font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input border-gray-300 w-full"
              required
            />
            <label className="label font-semibold text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="label font-semibold text-gray-700">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
              })}
              type="password"
              className="input w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-sm mt-1">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-sm mt-1">
                Password must include 1 uppercase & 1 lowercase letter
              </p>
            )}
          </div>

          <div className="text-right">
            <Link
              to=""
              className="text-gray-600 text-sm hover:underline cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          <button className="btn w-full bg-primary text-black py-2 rounded-lg font-semibold hover:bg-gray-900 transition-all mt-4">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-primary hover:text-blue-900 font-bold underline"
          >
            Login
          </Link>
        </p>
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-px w-16 bg-gray-400"></div>
          <span className="text-gray-700">or</span>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>
        <button
          //   onClick={handleGoogleLogin}
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
    </div>
  );
};

export default Register;
