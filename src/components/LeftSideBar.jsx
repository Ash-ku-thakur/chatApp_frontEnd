import axios from "axios";
import useGegAllMassages from "../hooks/useGetAllMassages";
import LeftSearchBar from "./LeftSearchBar";
import LeftUsersArr from "./LeftUsersArr";
import { MdLogout } from "react-icons/md";
import { USER } from "../constant/global";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelUser } from "../redux/authSlicer";
import { setText } from "../redux/massageSlicer";
import {useNavigate} from 'react-router-dom';

const LeftSideBar = () => {
  useGegAllMassages();
  let dispatch = useDispatch();
  let navigate = useNavigate()

  let logoutHandler = async () => {
    try {
      let res = await axios.get(`${USER}/logout`, { withCredentials: true });

      if (res?.data?.success) {
        dispatch(setAuthUser(null));
        dispatch(setOtherUsers(null));
        dispatch(setSelUser(null));
        dispatch(setText(''));
        navigate("/login")
        toast?.success(res?.data?.massage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full overflow-hidden">
      <div className="h-[100%] my-2 p-2">
        <div className="h-[10%] ">
          <LeftSearchBar />
        </div>

        {/* ocerflow-y-auto bhi kaam karega scroll ke bajay */}
        <div className="h-[80%] overflow-y-scroll">
          <LeftUsersArr />
        </div>

        <div className="h-[10%]">
          <button
            className="flex items-center text-2xl"
            onClick={logoutHandler}
          >
            <MdLogout size={"50px"} />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
