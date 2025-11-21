import { Link } from "react-router";
import error from "../assets/error.avif";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
        <img
          src={error}
          alt="404 Not Found"
          className="w-80 mb-6 rounded border-4 border-primary"
        />
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-lime-400 transition"
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
