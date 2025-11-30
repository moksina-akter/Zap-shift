import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
