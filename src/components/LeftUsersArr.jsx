import { useSelector } from "react-redux";
import LeftUser from "./LeftUser";

const LeftUsersArr = () => {
  let { otherUsers } = useSelector((store) => store?.auth);

  return (
    <div>
      <div className="">
        {otherUsers?.map((el) => (
          <LeftUser key={el?._id} users={el} />
        ))}
      </div>
    </div>
  );
};

export default LeftUsersArr;
