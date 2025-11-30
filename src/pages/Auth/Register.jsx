import React from "react";
import { useForm } from "react-hook-form";
// import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const HandleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(data);
    const profileImg = data.photo?.[0];
    const formData = new FormData();
    formData.append("image", profileImg);

    const img_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_host_key
    }`;
    // console.log("ImgBB Key:", import.meta.env.VITE_image_host_key);

    axios
      .post(img_URL, formData)
      .then((res) => {
        console.log(res.data.data.url);
        const userProfile = {
          displayName: data.name,
          photoURL: res.data.data.url,
        };
        updateUserProfile(userProfile)
          .then(() => {
            // console.log("update profile");
            navigate(location?.state || "/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex items-center justify-center  py-10 px-4">
      <div className="w-full max-w-md  bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <p className="py-4 text-center"> Register with ZapShift </p>
        {/* <CgProfile className="text-4xl text-gray-400" /> */}
        <form onSubmit={handleSubmit(HandleRegister)} className="space-y-2">
          {/* name */}
          <label className="label font-semibold text-gray-700">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            placeholder="Your Name"
            className="input border-gray-300 w-full"
            required
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Name is required</p>
          )}
          {/* photo */}
          <label className="label font-semibold text-gray-700">Photo</label>
          <input
            {...register("photo", { required: true })}
            type="file"
            // name="photo"
            placeholder="Your Photo"
            className="file-input w-full"
            accept="image/*"
            required
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Photo is required</p>
          )}
          {/* email */}
          <label className="label font-semibold text-gray-700">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input w-full bg-gray-50 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter your email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Email is required</p>
          )}
          {/* </div> */}

          {/* password */}
          <label className="label font-semibold text-gray-700">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
            })}
            type="password"
            className="input w-full bg-gray-50 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800"
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
          {/* </div> */}

          <div className="text-right">
            <Link
              to=""
              className="text-gray-600 text-sm hover:underline cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          <button className="btn w-full bg-primary text-black py-2 rounded-lg font-semibold hover:bg-lime-200 transition-all mt-4">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            state={location.state}
            className="text-primary hover:text-blue-900 font-bold underline"
          >
            Login
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
