import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER } from "../constant/global";
import { toast } from "react-hot-toast";

const Sign = () => {
  // user
  let [user, setUser] = useState({
    firstname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  let navigate = useNavigate();

  // user creation function
  let userCreateHandler = async (e) => {
    e?.preventDefault();

    // userCreate
    try {
      let res = await axios.post(`${USER}/register`, user);

      if (res?.data?.success) {
        toast.success(res?.data?.massage);
        navigate("/login");
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
          <h1>SignUp</h1>
        </div>

        <div>
          {/* firstname */}
          <div className="  p-2">
            <label className="text-xl uppercase" htmlFor="">
              firstname:
            </label>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={(e) =>
                setUser({ ...user, firstname: e?.target?.value })
              }
              placeholder="enter your name"
              className=" hover:border-black border-[1px] w-full p-2"
            />
          </div>

          {/* username */}
          <div className="  p-2">
            <label className="text-xl uppercase" htmlFor="">
              username:
            </label>
            <input
              type="text"
              name="username"
              value={user?.username}
              onChange={(e) => setUser({ ...user, username: e?.target?.value })}
              placeholder="enter your username"
              className=" hover:border-black border-[1px] w-full p-2"
            />
          </div>

          {/* email */}
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

          {/* password */}
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

          {/* confirmPassword */}
          <div className="  p-2">
            <label className="text-xl uppercase" htmlFor="">
              confirmPassword:
            </label>
            <input
              type="text"
              name="confirmPassword"
              value={user?.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e?.target?.value })
              }
              placeholder="enter your confirmPassword"
              className=" hover:border-black border-[1px] w-full p-2"
            />
          </div>

          {/* gender */}
          <div className="flex gap-3 text-xl p-2 m-3">
            <div>
              <label htmlFor="">Mail:</label>
              <input
                type="radio"
                name="gender"
                value="mail"
                onChange={(e) => setUser({ ...user, gender: e?.target?.value })}
              />
            </div>
            <div>
              <label htmlFor="">Femail:</label>
              <input
                type="radio"
                name="gender"
                value="femail"
                onChange={(e) => setUser({ ...user, gender: e?.target?.value })}
              />
            </div>
          </div>

          {/* login link */}
          <div className="w-full text-center mb-2">
            <p>
              Already have an Account?{" "}
              <Link
                to={"/login"}
                className="text-blue-400 text-xl cursor-pointer"
              >
                login
              </Link>
            </p>
          </div>

          {/* submit button */}
          <div className="w-full text-center cursor-pointer bg-violet-600 rounded-md">
            <button type="submit">
              <input type="submit" value="submit" className="py-2 " />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sign;
