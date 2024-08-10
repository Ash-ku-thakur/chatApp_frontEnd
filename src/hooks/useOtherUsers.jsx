import { useEffect } from "react";
import { USER } from "../constant/global";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/authSlicer";

const useOtherUsers = () => {
    let dispatch = useDispatch()

  useEffect(() => {
    getOtherUsers();
  }, []);

  let getOtherUsers = async () => {
    try {
      let res = await axios.get(`${USER}/otheruser`, {
        withCredentials: true,
      });
    //   console.log(res?.data);
      dispatch(setOtherUsers(res?.data))
    } catch (error) {
      console.log(error);
    }
  };
};

export default useOtherUsers;
