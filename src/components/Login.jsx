import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER } from "../constant/global";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authSlicer";

const Login = () => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  // user login function
  let userCreateHandler = async (e) => {
    e?.preventDefault();

    // userCreate
    try {
      let res = await axios.post(`${USER}/login`, user, {
        withCredentials: true,
      });
      // console.log(res?.data?.user);

      if (res?.data?.success) {
        dispatch(setAuthUser(res?.data?.user));
        toast.success(res?.data?.massage);
        navigate("/");
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.massage);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={userCreateHandler}
        action=""
        className="p-4  w-[35%] rounded-xl border-black border-[1px] flex flex-col gap-3"
      >
        <div className="w-full text-2xl text-center">
          <h1>Login</h1>
        </div>

        <div>
          <div className="  p-2">
            <label className="text-xl uppercase" htmlFor="">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              placeholder="enter your email"
              className=" hover:border-black border-[1px] w-full p-2"
            />
          </div>

          <div className="  p-2">
            <label className="text-xl uppercase" htmlFor="">
              password:
            </label>
            <input
              type="password"
              name="password"
              value={user?.password}
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
              placeholder="enter your password"
              className=" hover:border-black border-[1px] w-full p-2"
            />
          </div>

          <div className="w-full text-center mb-2">
            <p>
              Does not have an Account? please{" "}
              <Link
                to={"/sign"}
                className="text-blue-400 text-xl cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>

          <div className="w-full text-center bg-violet-600 rounded-md cursor-pointer">
            <button type="submit">
              <input type="submit" value="submit" className="py-2 " />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
