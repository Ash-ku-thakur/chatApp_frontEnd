import { useDispatch, useSelector } from "react-redux";
import { setSelUser } from "../redux/authSlicer";

const LeftUser = ({ users }) => {
  let dispatch = useDispatch();

  let { onlineUsers } = useSelector((store) => store?.auth);

  let online = onlineUsers?.includes(users?._id);

  // Select user handler
  let selUserHandler = (user) => {
    dispatch(setSelUser(user));
  };

  return (
    <div onClick={() => selUserHandler(users)}>
      <div className="flex flex-col my-3">
        <div className="flex items-center w-full hover:bg-violet-300 rounded-2xl">
          <div className={`avatar ${online && "online"}`}>
            <div className="w-16 rounded-full">
              <img src={users?.profilePhoto} />
            </div>
          </div>
          <div></div>
          <p>{users?.firstname}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftUser;
